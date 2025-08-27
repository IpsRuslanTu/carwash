'use client'
import {useUser} from "@/entities/user/services/useUser";

export default function ProfilePage() {
  const user = useUser()

  if (!user) return <>Нет данных</>;

  return (
    <>
      <div>ID: {user.id}</div>
      <div>Имя: {user.first_name} {user.last_name}</div>
      <div>Username: @{user.username}</div>
      <div>Язык: {user.language_code}</div>
      {user.is_premium && <div>💎 Premium</div>}
    </>
  );
}