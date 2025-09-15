'use client'
import dynamic from 'next/dynamic'

const isDev = process.env.NODE_ENV !== 'production'

export const TelegramProvider = dynamic(
  () =>
    isDev
      ? import('./TelegramProviderDev')
      : import('./TelegramProviderImpl'),
  { ssr: false }
)
