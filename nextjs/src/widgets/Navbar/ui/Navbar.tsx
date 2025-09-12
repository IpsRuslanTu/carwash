'use client'
import Link from 'next/link'
import { Home, User, Settings } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-blue-500 rounded-t-lg shadow-md">
      <div className="flex justify-around items-center h-14">
        <Link
          href="/profile"
          className="flex flex-col items-center text-white"
        >
          <User size={22} />
          <span className="text-xs">Профиль</span>
        </Link>
        <Link
          href="/"
          className="flex flex-col items-center text-white"
        >
          <Home size={22} />
          <span className="text-xs">Запись</span>
        </Link>
        <Link
          href="/contacts"
          className="flex flex-col items-center text-white"
        >
          <Settings size={22} />
          <span className="text-xs">Контакты</span>
        </Link>
      </div>
    </nav>
  )
}
