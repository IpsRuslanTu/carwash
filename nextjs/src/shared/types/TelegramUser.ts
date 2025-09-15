export interface TelegramUser {
  id?: number
  username?: string
  first_name?: string
  last_name?: string
}

export interface TelegramContextValue {
  user: TelegramUser
}