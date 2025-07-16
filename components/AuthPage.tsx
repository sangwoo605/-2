'use client'

import { useState } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import { Heart } from 'lucide-react'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-10 h-10 text-pink-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              내 감정일기
            </h1>
          </div>
          <p className="text-gray-600">
            마음의 위로와 자기 치유를 위한 정서적 지원 공간
          </p>
        </div>

        {/* 폼 */}
        {isLogin ? <LoginForm /> : <SignUpForm />}

        {/* 전환 버튼 */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            {isLogin ? '계정이 없으신가요?' : '이미 계정이 있으신가요?'}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:text-blue-600 font-semibold mt-2 transition-colors"
          >
            {isLogin ? '회원가입하기' : '로그인하기'}
          </button>
        </div>
      </div>
    </div>
  )
} 