'use client'
import { useTelegramUser } from '@/shared/hooks/useTelegramUser'

export default function ProfilePage() {
  const context = useTelegramUser()

  if (!context.user) {
    return <div>⏳ Загрузка профиля...</div>
  }

  return (
    <div>
      👤 {context.user.username || `ID: ${context.user.id}`}
    </div>
  )
}