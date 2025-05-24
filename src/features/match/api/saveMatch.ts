import { useMutation } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";
import { queryClient } from "@/lib/reactQuery";
import { Match, MatchResult } from "@/types";
import { IS_DEVELOPMENT } from "@/config/constants";
import { getCookieValue } from "@/utils/getCookieValue";
import { AUTH_COOKIE } from "@/testing/mocks/utils";

type SaveMatchParams = {
  match: Match;
};

export const saveMatch = ({ match }: SaveMatchParams) => {
  const options = IS_DEVELOPMENT
    ? { headers: { Authorization: `Bearer ${getCookieValue(AUTH_COOKIE)}` } }
    : { withCredentials: true };
  return apiClient.post("/matches", match, options);
};

type UseSaveMatchParams = {
  onSuccess?: (match: MatchResult) => void;
};

export const useSaveMatch = ({ onSuccess }: UseSaveMatchParams = {}) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: saveMatch,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["matches"] });
      onSuccess?.(response.data);
    },
  });

  return {
    submit,
    isLoading: isPending,
  };
};
