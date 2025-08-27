import { useQueryClient } from "@tanstack/react-query";
import {queryKeys} from "@/shared/consts/queryKeys";
import {User} from "@/entities/user/model/user";

export function useUser() {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<User>([queryKeys.USER]);

  return user;
}