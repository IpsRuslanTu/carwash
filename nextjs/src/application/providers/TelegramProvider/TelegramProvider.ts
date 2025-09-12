'use client'
import dynamic from 'next/dynamic'

export const TelegramProvider = dynamic(
  () => import('./TelegramProviderImpl'),
  { ssr: false }
)
