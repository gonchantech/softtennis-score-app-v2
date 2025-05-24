import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import { AuthUser, AuthData } from "@/types";

export const Signup = async (data: AuthData): Promise<{ user: AuthUser }> => {
  return apiClient.post("/auth/signup", data);
};

type UseSignupOptions = {
  onSuccess?: (user: AuthUser) => void;
  onError?: (error: Error) => void;
};

export const useSignup = ({ onSuccess, onError }: UseSignupOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: Signup,
    onSuccess: ({ user }) => {
      onSuccess?.(user);
    },
    onError: (error) => {
      onError?.(error);
    },
  });

  return { submit, isPending };
};
