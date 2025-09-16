'use client'
import { useTelegramUser } from '@/shared/hooks/useTelegramUser'

export default function ProfilePage() {
  const { user, loading } = useTelegramUser()

  if (loading || !user) {
    return <div>⏳ Загрузка профиля...</div>
  }

  return <div>👤 {user.username || `ID: ${user.id}`}</div>
}