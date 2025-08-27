'use client'
import {ReactNode, useEffect, useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {queryKeys} from "@/shared/consts/queryKeys";
import {User} from "@/entities/user/model/user";

interface TelegramProviderProps {
  children: ReactNode
}

export const TelegramProvider = (props: TelegramProviderProps) => {
  const queryClient = useQueryClient();

  const [test, setTest] = useState<User>()

  useEffect(() => {
    if (typeof window === "undefined") return;

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const tg = (window as any).Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    tg.expand();

    const user = tg.initDataUnsafe?.user || null;

    setTest(user)

    queryClient.setQueryData([queryKeys.USER], user);
  }, [queryClient]);

  return <>
    <div>Test</div>
    <div>ID: {test?.id}</div>
    <div>Имя: {test?.first_name} {test?.last_name}</div>
    <div>Username: @{test?.username}</div>
    {props.children}
  </>;
};
