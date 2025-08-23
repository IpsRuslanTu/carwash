import Link from "next/link";
import {CalendarCheck, Phone, User} from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="border-t bg-blue-600 rounded-t-2xl shadow-md">
      <div className="max-w-4xl mx-auto">
        <ul className="flex justify-around py-2">
          <li>
            <Link
              href="/profile"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <User size={24} color='white' />
              <span className="text-xs text-white">Профиль</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <CalendarCheck size={24} color='white' />
              <span className="text-xs text-white">Запись</span>
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className="flex flex-col items-center text-gray-600 hover:text-blue-600"
            >
              <Phone size={24} color='white' />
              <span className="text-xs text-white">Контакты</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
