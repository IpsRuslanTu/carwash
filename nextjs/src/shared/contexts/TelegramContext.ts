import { createContext } from 'react'
import { TelegramContextValue } from '@/shared/types/TelegramUser'

export const TelegramContext = createContext<TelegramContextValue>({
  user: null,
  loading: true
})