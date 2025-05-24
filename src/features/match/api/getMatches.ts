"use client";

import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { MatchResultMeta } from "@/types";
import { IS_DEVELOPMENT } from "@/config/constants";
import { getCookieValue } from "@/utils/getCookieValue";
import { AUTH_COOKIE } from "@/testing/mocks/utils";

export const getMatches = (): Promise<MatchResultMeta[]> => {
  const options = IS_DEVELOPMENT
    ? { headers: { Authorization: `Bearer ${getCookieValue(AUTH_COOKIE)}` } }
    : { withCredentials: true };
  return apiClient.get("/matches", options);
};

export const useMatches = () => {
  const { data, isFetching, isFetched } = useQuery({
    queryKey: ["matches"],
    queryFn: () => getMatches(),
    initialData: [],
  });

  return {
    data,
    isLoading: isFetching && !isFetched,
  };
};
