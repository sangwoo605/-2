import { Heart, LogOut, User } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function Header() {
  const { user, logout, loading } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <header className="py-8">
      <div className="flex items-center justify-between max-w-4xl mx-auto px-4">
        {/* 로고 */}
        <div>
          <h1 className="text-4xl font-bold text-[#222]">
            내 감정일기
          </h1>
        </div>

        {/* 사용자 정보 및 로그아웃 */}
        {user && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-4 h-4" />
              <span className="text-sm">{user.email}</span>
            </div>
            <button
              onClick={handleLogout}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-red-500 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              {loading ? '로그아웃 중...' : '로그아웃'}
            </button>
          </div>
        )}
      </div>
      
      <div className="text-center mt-4">
        <p className="text-gray-600 text-lg">
          마음의 위로와 자기 치유를 위한 정서적 지원 공간
        </p>
      </div>
    </header>
  )
} 