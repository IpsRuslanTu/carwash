import { useContext } from 'react'
import { TelegramContext } from '@/shared/contexts/TelegramContext'

export const useTelegramUser = () => {
  const context = useContext(TelegramContext)

  if (!context) {
    throw new Error('No telegram user')
  }

  return context
}