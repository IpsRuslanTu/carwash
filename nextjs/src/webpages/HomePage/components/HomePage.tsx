'use client'
import React, { useMemo, useState } from 'react'
import { getDaysInMonth } from '@/shared/helpers/getDaysInMonth'
import { dayTitles } from '@/shared/consts/dayTitles'
import { CalendarButton } from './CalendarButton'

export default function HomePage() {
  const [ date, setDate ] = useState(new Date())

  const nowMidnight = useMemo(() => {
    const now =  new Date()
    now.setUTCHours(0, 0, 0, 0)

    return now
  }, [])

  const year = date.getFullYear()
  const month = date.getMonth()

  const days = getDaysInMonth(year, month)

  const increaseMonth = () => {
    const newDate = new Date(date.getTime())
    newDate.setMonth(date.getMonth() + 1)

    setDate(newDate)
  }

  const decreaseMonth = () => {
    const newDate = new Date(date.getTime())
    newDate.setMonth(date.getMonth() - 1)

    setDate(newDate)
  }

  const isActiveDate = (day: number) => {
    const clonedDate = new Date(date)
    clonedDate.setDate(day)
    clonedDate.setUTCHours(0, 0, 0, 0)

    return clonedDate >= nowMidnight
  }

  return (
    <div className='bg-gray-100 flex flex-col items-center p-6'>
      <h1 className='text-4xl font-bold text-blue-700 mb-4'>Автомойка</h1>

      <div className='mb-6 w-2xs flex justify-between text-2xl text-gray-700 capitalize'>
        <button onClick={() => decreaseMonth()} disabled={date.getMonth() <= nowMidnight.getMonth()}>&lt;</button>
        <h2>{date.toLocaleString('ru-RU', { month: 'long' })}</h2>
        <button onClick={() => increaseMonth()}>&gt;</button>
      </div>

      <div className='grid grid-cols-7 gap-2 sm:gap-4 max-w-lg w-full'>
        {dayTitles.map(i => (
          <div key={i} className='bg-blue-100 font-bold text-blue-800 rounded-lg p-2 sm:p-4 text-center'>
            {i}
          </div>
        ))}
        {days.map((day, idx) =>
          day
            ? <CalendarButton
              key={idx}
              day={day}
              month={month}
              year={year}
              isActive={isActiveDate(day)}
            />
            : <div key={idx}></div>
        )}
      </div>

      <div className='mt-10 text-center text-gray-500'>
        Выберите день для записи на автомойку.
      </div>
    </div>
  )
};
