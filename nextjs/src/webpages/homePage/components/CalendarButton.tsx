"use client";
import { useRouter } from "next/navigation";

interface CalendarButtonProps {
  day: number;
  month: number;
  year: number;
}

export const CalendarButton = (props: CalendarButtonProps) => {
  const {day, month, year} = props

  const router = useRouter();

  const handleClick = () => {
    router.push(`/schedule/${year}-${month + 1}-${day}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white shadow rounded-lg p-2 sm:p-4 text-center hover:bg-blue-50 transition-colors"
    >
      <span className="font-semibold text-gray-700">{day}</span>
    </button>
  );
}