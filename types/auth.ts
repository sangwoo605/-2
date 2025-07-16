export interface AuthUser {
  id: string
  email: string | undefined
  created_at: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignUpCredentials extends LoginCredentials {
  confirmPassword: string
}

export interface AuthState {
  user: AuthUser | null
  loading: boolean
  error: string | null
} 