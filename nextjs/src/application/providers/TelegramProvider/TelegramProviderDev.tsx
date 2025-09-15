'use client'
import { ReactNode } from 'react'
import { TelegramContext } from '@/shared/contexts/TelegramContext'

interface Props {
  children: ReactNode
}

const mockContext = {
  user: {
    id: 1,
    username: 'dev_user',
    first_name: 'Dev',
    last_name: 'Mode',
  }
}

const TelegramProviderDev = ({ children }: Props) => {
  return (
    <TelegramContext.Provider value={mockContext}>
      {children}
    </TelegramContext.Provider>
  )
}

export default TelegramProviderDev
