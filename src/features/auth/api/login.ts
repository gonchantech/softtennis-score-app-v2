import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";
import { queryClient } from "@/lib/reactQuery";

import { AuthUser, AuthData } from "@/types";

export const Login = async (data: AuthData): Promise<{ user: AuthUser }> => {
  return apiClient.post("/auth/login", data).then((res) => {
    return res.data;
  });
};

type UseLoginOptions = {
  onSuccess?: (user: AuthUser) => void;
  onError?: (error: Error) => void;
};

export const useLogin = ({ onSuccess, onError }: UseLoginOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: Login,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["auth-user"], user);
      onSuccess?.(user);
    },
    onError: (error) => {
      onError?.(error);
    },
  });

  return { submit, isPending };
};
