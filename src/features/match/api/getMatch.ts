import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { MatchResult } from "@/types";
import { IS_DEVELOPMENT } from "@/config/constants";
import { AUTH_COOKIE } from "@/testing/mocks/utils";
import { getCookieValue } from "@/utils/getCookieValue";

type GetMatchParams = {
  matchId: string;
};

export const getMatch = ({ matchId }: GetMatchParams): Promise<MatchResult> => {
  const options = IS_DEVELOPMENT
    ? { headers: { Authorization: `Bearer ${getCookieValue(AUTH_COOKIE)}` } }
    : { withCredentials: true };
  return apiClient.get(`/matches/${matchId}`, options).then((res) => {
    return res.data;
  });
};

export const useMatch = ({ matchId }: GetMatchParams) => {
  const { data, isLoading } = useQuery({
    queryKey: ["match", matchId],
    queryFn: () => getMatch({ matchId }),
    enabled: !!matchId,
  });

  return {
    data,
    isLoading,
  };
};
