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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: 'black' }} className={'bg-gray-100'}>
      <h2>Тест провайдера</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Имя:</strong> {user.first_name} {user.last_name ?? ''}</p>
      <p><strong>Username:</strong> @{user.username ?? 'нет'}</p>
      <p><strong>Язык:</strong> {user.language_code}</p>

      <hr style={{ margin: '20px 0' }} />

      {props.children}
    </div>
  )
}

export default TelegramProviderImpl