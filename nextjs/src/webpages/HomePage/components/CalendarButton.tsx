"use client";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface CalendarButtonProps {
    day: number;
    month: number;
    year: number;
    isActive: boolean;
}

export const CalendarButton = (props: CalendarButtonProps) => {
    const {day, month, year, isActive} = props

    const router = useRouter();

    const handleClick = () => {
        router.push(`/schedule/${year}-${month + 1}-${day}`);
    };

    return (
        <button
            onClick={isActive ? handleClick : undefined}
            className={clsx(
                "shadow rounded-lg p-2 sm:p-4 text-center transition-colors",
                {
                    "bg-gray-200 text-gray-400 cursor-not-allowed": !isActive,
                    "bg-white hover:bg-blue-50 text-gray-700": isActive
                }
            )}
        >
            <span className="font-semibold text-gray-700">{day}</span>
        </button>
    );
}