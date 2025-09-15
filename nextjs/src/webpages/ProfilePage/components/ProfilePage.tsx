'use client'
import { useTelegramUser } from '@/shared/hooks/useTelegramUser'

export default function ProfilePage() {
  const { user } = useTelegramUser()

  return <div>{user.username}</div>
}