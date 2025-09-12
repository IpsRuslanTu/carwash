import React from 'react'
import { getDaysInMonth } from '@/shared/helpers/getDaysInMonth'
import { dayTitles } from '@/shared/consts/dayTitles'
import { CalendarButton } from './CalendarButton'

export default function HomePage() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const monthName = today.toLocaleString('ru-RU', { month: 'long' })

  const days = getDaysInMonth(year, month)

  return (
    <div className="bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-2">Автомойка</h1>
      <h2 className="text-2xl text-gray-700 mb-8 capitalize">{monthName}</h2>

      <div className="grid grid-cols-7 gap-2 sm:gap-4 max-w-lg w-full">
        {dayTitles.map(i => (
          <div key={i} className="bg-blue-100 font-bold text-blue-800 rounded-lg p-2 sm:p-4 text-center">
            {i}
          </div>
        ))}
        {days.map((day, idx) =>
          day
            ? <CalendarButton key={idx} day={day} month={month} year={year} isActive={day >= today.getDate()} />
            : <div key={idx}></div>
        )}
      </div>

      <div className="mt-10 text-center text-gray-500">
                Выберите день для записи на автомойку.
      </div>
    </div>
  )
};
