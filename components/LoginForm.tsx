'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { LoginCredentials } from '@/types/auth'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function LoginForm() {
  const { login, loading, error, clearError } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(credentials)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials(prev => ({ ...prev, [name]: value }))
    if (error) clearError()
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">로그인</h2>
          <p className="text-gray-600">내 감정일기에 오신 것을 환영합니다</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              이메일
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="이메일을 입력하세요"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              비밀번호
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="비밀번호를 입력하세요"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !credentials.email || !credentials.password}
            className={`
              w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200
              ${loading || !credentials.email || !credentials.password
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg'
              }
            `}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                로그인 중...
              </div>
            ) : (
              '로그인'
            )}
          </button>
        </form>
      </div>
    </div>
  )
} 