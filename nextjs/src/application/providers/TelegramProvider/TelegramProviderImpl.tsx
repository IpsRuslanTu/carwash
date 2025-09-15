'use client'
import { ReactNode, useEffect } from 'react'
import { init, useRawInitData } from '@telegram-apps/sdk-react'
import { TelegramContext } from '@/shared/contexts/TelegramContext'

interface TelegramProviderProps {
  children: ReactNode
}

const TelegramProviderImpl = (props: TelegramProviderProps) => {
  useEffect(() => {
    init()
  }, [])

  const raw = useRawInitData()

  if (!raw) {
    return <div>⏳ Загрузка Telegram...</div>
  }

  const params = new URLSearchParams(raw)
  const userString = params.get('user')
  const user = userString ? JSON.parse(userString) : null

  if (!user) {
    return <div>❌ Ошибка: не удалось получить пользователя</div>
  }

  return (
    <TelegramContext.Provider value={user}>
      {props.children}
    </TelegramContext.Provider>
  )
}

export default TelegramProviderImpl