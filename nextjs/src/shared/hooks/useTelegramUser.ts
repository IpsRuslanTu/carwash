import { useContext } from 'react'
import { TelegramContext } from '@/shared/contexts/TelegramContext'

export const useTelegramUser = () => {
  return useContext(TelegramContext)
}