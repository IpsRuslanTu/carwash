"use client";
import { useParams } from "next/navigation";

const hours = [
    "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00",
    "16:00", "17:00", "18:00"
];

export default function SchedulePage() {
    const params = useParams();
    const date = params?.date;

    return (
        <main className="bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">
                Запись на {date}
            </h1>

            <div className="grid grid-cols-3 gap-4 max-w-md w-full">
                {hours.map((hour) => (
                    <button
                        key={hour}
                        className="bg-white shadow rounded-lg p-4 text-center hover:bg-blue-50 transition-colors"
                    >
                        {hour}
                    </button>
                ))}
            </div>
        </main>
    );
}