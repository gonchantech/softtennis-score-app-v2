"use client";

import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import { AuthUser } from "@/types";
import { IS_DEVELOPMENT } from "@/config/constants";
import { getCookieValue } from "@/utils/getCookieValue";
import { AUTH_COOKIE } from "@/testing/mocks/utils";

export const getAuthUser = (): Promise<AuthUser> => {
  const options = IS_DEVELOPMENT
    ? { headers: { Authorization: `Bearer ${getCookieValue(AUTH_COOKIE)}` } }
    : { withCredentials: true };
  return apiClient.get("/auth/me", options);
};

export const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["auth-user"],
    queryFn: () => getAuthUser(),
  });

  return { data, isLoading };
};
