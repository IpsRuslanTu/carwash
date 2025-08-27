'use client'
import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "@/shared/consts/queryKeys";
import {User} from "@/entities/user";

export default function ProfilePage() {
  const { data: user } = useQuery<User>({ queryKey: [queryKeys.USER] });

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