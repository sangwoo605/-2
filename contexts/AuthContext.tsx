'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { AuthState, LoginCredentials, SignUpCredentials } from '@/types/auth'

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>
  signUp: (credentials: SignUpCredentials) => Promise<void>
  logout: () => Promise<void>
  clearError: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // 초기 세션 확인
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
    }

    getSession()

    // 인증 상태 변경 리스너
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const login = async (credentials: LoginCredentials) => {
    try {
      setLoading(true)
      setError(null)
      
      const { error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      })

      if (error) throw error
    } catch (error: any) {
      setError(error.message || '로그인에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (credentials: SignUpCredentials) => {
    try {
      setLoading(true)
      setError(null)

      if (credentials.password !== credentials.confirmPassword) {
        throw new Error('비밀번호가 일치하지 않습니다.')
      }

      const { error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
      })

      if (error) throw error
    } catch (error: any) {
      setError(error.message || '회원가입에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error: any) {
      setError(error.message || '로그아웃에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const clearError = () => {
    setError(null)
  }

  const value: AuthContextType = {
    user,
    loading,
    error,
    login,
    signUp,
    logout,
    clearError,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 