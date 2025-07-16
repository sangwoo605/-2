"use client";

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import EmotionSelector from '@/components/EmotionSelector'
import DiaryEditor from '@/components/DiaryEditor'
import AIResponse from '@/components/AIResponse'
import Header from '@/components/Header'
import AuthPage from '@/components/AuthPage'

export type Emotion = 'happy' | 'sad' | 'angry' | 'excited' | 'calm' | 'anxious'

export interface DiaryEntry {
  id: string
  date: string
  emotion: Emotion
  content: string
  aiResponse: string
}

export default function Home() {
  const { user, loading } = useAuth()
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null)
  const [diaryContent, setDiaryContent] = useState('')
  const [aiResponse, setAiResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleEmotionSelect = (emotion: Emotion) => {
    setSelectedEmotion(emotion)
    setAiResponse('') // 새로운 감정 선택 시 AI 응답 초기화
  }

  const handleDiarySubmit = async () => {
    if (!selectedEmotion || !diaryContent.trim()) return

    setIsLoading(true)
    
    // AI 응답 시뮬레이션 (실제로는 API 호출)
    setTimeout(() => {
      const responses = {
        happy: "오늘 정말 기분이 좋으시군요! 😊 그런 긍정적인 에너지가 주변 사람들에게도 전파될 거예요. 이런 좋은 기분을 오래 유지할 수 있도록 작은 행복들을 더 찾아보세요.",
        sad: "힘든 하루를 보내셨군요. 😔 그런 감정을 느끼는 것은 완전히 자연스러운 일이에요. 혼자가 아니라는 걸 기억하세요. 내일은 조금 더 나아질 거예요.",
        angry: "화가 나는 일이 있었군요. 😤 그런 감정을 느끼는 것은 당연해요. 깊은 숨을 쉬고 잠시 멈춰서 생각해보는 것도 좋은 방법이에요.",
        excited: "정말 신나는 일이 있으셨군요! 🎉 그런 설렘과 기대감을 느끼는 순간들이 인생의 특별한 선물이에요. 이 기분을 오래 간직하세요.",
        calm: "평온한 마음으로 하루를 마무리하시는군요. 😌 이런 평화로운 순간들이 우리에게 힘을 주는 것 같아요. 오늘 하루도 수고하셨어요.",
        anxious: "불안한 마음이 드시는군요. 😰 걱정되는 일이 있다면 천천히 정리해보세요. 모든 일이 잘 해결될 거예요. 당신을 응원해요."
      }
      
      setAiResponse(responses[selectedEmotion])
      setIsLoading(false)
    }, 2000)
  }

  // 로딩 중이면 로딩 화면 표시
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    )
  }

  // 로그인하지 않은 경우 인증 페이지 표시
  if (!user) {
    return <AuthPage />
  }

  // 로그인한 경우 메인 앱 표시
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <Header />
        
        <div className="mt-8 space-y-8">
          {/* 감정 선택 섹션 */}
          <section className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              오늘의 기분은 어떠세요?
            </h2>
            <EmotionSelector 
              selectedEmotion={selectedEmotion}
              onEmotionSelect={handleEmotionSelect}
            />
          </section>

          {/* 일기 작성 섹션 */}
          {selectedEmotion && (
            <section className="bg-white rounded-2xl p-6 shadow-lg animate-slide-up">
              <DiaryEditor
                emotion={selectedEmotion}
                content={diaryContent}
                onContentChange={setDiaryContent}
                onSubmit={handleDiarySubmit}
                isLoading={isLoading}
              />
            </section>
          )}

          {/* AI 응답 섹션 */}
          {aiResponse && (
            <section className="bg-white rounded-2xl p-6 shadow-lg animate-slide-up">
              <AIResponse 
                emotion={selectedEmotion!}
                response={aiResponse}
              />
            </section>
          )}
        </div>
      </div>
    </main>
  )
} 