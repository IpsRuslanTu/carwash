import { createContext } from 'react'
import { TelegramContextValue } from '@/shared/types/TelegramUser'

export const TelegramContext = createContext<TelegramContextValue | null>(null)