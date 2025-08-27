'use client'
import {ReactNode, useEffect} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {queryKeys} from "@/shared/consts/queryKeys";

interface TelegramProviderProps {
  children: ReactNode
}

export const TelegramProvider = (props: TelegramProviderProps) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const tg = (window as any).Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    tg.expand();

    const user = tg.initDataUnsafe?.user || null;

    queryClient.setQueryData([queryKeys.USER], user);
  }, [queryClient]);

  return <>{props.children}</>;
};
