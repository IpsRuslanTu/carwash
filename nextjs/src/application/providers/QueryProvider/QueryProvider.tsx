'use client'
import { useState, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface QueryProviderProps {
    children: ReactNode
}

export const QueryProvider = (props: QueryProviderProps) => {
  const [ queryClient ] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}
