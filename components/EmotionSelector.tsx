import { Emotion } from '@/app/page'

interface EmotionSelectorProps {
  selectedEmotion: Emotion | null
  onEmotionSelect: (emotion: Emotion) => void
}

const emotions = [
  { id: 'happy' as Emotion, emoji: '😊', label: '행복', color: 'bg-happy-gradient' },
  { id: 'sad' as Emotion, emoji: '😔', label: '슬픔', color: 'bg-sad-gradient' },
  { id: 'angry' as Emotion, emoji: '😤', label: '화남', color: 'bg-angry-gradient' },
  { id: 'excited' as Emotion, emoji: '🎉', label: '신남', color: 'bg-excited-gradient' },
  { id: 'calm' as Emotion, emoji: '😌', label: '평온', color: 'bg-calm-gradient' },
  { id: 'anxious' as Emotion, emoji: '😰', label: '불안', color: 'bg-anxious-gradient' },
]

export default function EmotionSelector({ selectedEmotion, onEmotionSelect }: EmotionSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {emotions.map((emotion) => (
        <button
          key={emotion.id}
          onClick={() => onEmotionSelect(emotion.id)}
          className={`
            relative p-6 rounded-xl transition-all duration-300 transform hover:scale-105
            ${selectedEmotion === emotion.id 
              ? `${emotion.color} shadow-lg ring-2 ring-white ring-opacity-50` 
              : 'bg-gray-100 hover:bg-gray-200'
            }
          `}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">{emotion.emoji}</div>
            <div className={`font-semibold ${
              selectedEmotion === emotion.id ? 'text-white' : 'text-gray-700'
            }`}>
              {emotion.label}
            </div>
          </div>
          {selectedEmotion === emotion.id && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          )}
        </button>
      ))}
    </div>
  )
} 