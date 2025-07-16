import { Emotion } from '@/app/page'
import { Send } from 'lucide-react'

interface DiaryEditorProps {
  emotion: Emotion
  content: string
  onContentChange: (content: string) => void
  onSubmit: () => void
  isLoading: boolean
}

const emotionLabels = {
  happy: '행복한',
  sad: '슬픈',
  angry: '화난',
  excited: '신나는',
  calm: '평온한',
  anxious: '불안한'
}

export default function DiaryEditor({ 
  emotion, 
  content, 
  onContentChange, 
  onSubmit, 
  isLoading 
}: DiaryEditorProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {emotionLabels[emotion]} 마음을 기록해보세요
      </h2>
      <div className="space-y-4">
        <textarea
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder="오늘 있었던 일이나 느낀 감정을 자유롭게 적어보세요..."
          className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isLoading}
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {content.length} / 500자
          </span>
          <button
            onClick={onSubmit}
            disabled={!content.trim() || isLoading}
            className={`
              flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all duration-200
              ${!content.trim() || isLoading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg'
              }
            `}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                AI가 분석 중...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                AI와 대화하기
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
} 