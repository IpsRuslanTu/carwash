'use client'
import { ReactNode } from 'react'
import { TelegramContext } from '@/shared/contexts/TelegramContext'

interface Props {
  children: ReactNode
}

const user = {
  id: 1,
  username: 'dev_user',
  first_name: 'Dev',
  last_name: 'Mode',
}

const TelegramProviderDev = ({ children }: Props) => {
  return (
    <TelegramContext.Provider value={{ user, loading: false }}>
      {children}
    </TelegramContext.Provider>
  )
}

export default TelegramProviderDev
