import { Emotion } from '@/app/page'
import { MessageCircle, Sparkles } from 'lucide-react'

interface AIResponseProps {
  emotion: Emotion
  response: string
}

const emotionColors = {
  happy: 'bg-happy-gradient',
  sad: 'bg-sad-gradient',
  angry: 'bg-angry-gradient',
  excited: 'bg-excited-gradient',
  calm: 'bg-calm-gradient',
  anxious: 'bg-anxious-gradient'
}

export default function AIResponse({ emotion, response }: AIResponseProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-full ${emotionColors[emotion]}`}>
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          AI의 따뜻한 응답
        </h2>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
        <div className="flex items-start gap-3">
          <MessageCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed text-lg">
              {response}
            </p>
            <div className="text-sm text-gray-500">
              💡 AI가 당신의 감정을 분석하고 위로의 말을 전해드렸어요.
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h3 className="font-semibold text-yellow-800 mb-2">💭 다음에 생각해볼 질문</h3>
        <p className="text-yellow-700 text-sm">
          {emotion === 'happy' && "이런 행복한 순간을 더 자주 만들 수 있는 방법은 무엇일까요?"}
          {emotion === 'sad' && "이 슬픔을 이겨내는 데 도움이 될 수 있는 것은 무엇일까요?"}
          {emotion === 'angry' && "이 상황을 다른 관점에서 바라보면 어떻게 보일까요?"}
          {emotion === 'excited' && "이 설렘을 더 오래 간직할 수 있는 방법은 무엇일까요?"}
          {emotion === 'calm' && "이 평온함을 일상에서 더 자주 느낄 수 있는 방법은 무엇일까요?"}
          {emotion === 'anxious' && "이 불안을 줄이는 데 도움이 될 수 있는 것은 무엇일까요?"}
        </p>
      </div>
    </div>
  )
} 