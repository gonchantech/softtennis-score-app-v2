import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";
import { queryClient } from "@/lib/reactQuery";

export const logout = () => {
  return apiClient.post("./auth/logout");
};

type UseLogoutOptions = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
};

export const useLogout = ({ onSuccess, onError }: UseLogoutOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth-user"] });
      onSuccess?.();
    },
    onError: (error) => {
      onError?.(error);
    },
  });

  return { submit, isPending };
};
