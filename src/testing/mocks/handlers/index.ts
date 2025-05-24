import { http, HttpResponse } from "msw";
import { API_URL } from "@/config/constants";
import { authHandlers } from "./auth";
import { matchHandlers } from "./match";

export const handlers = [
  ...authHandlers,
  ...matchHandlers,
  http.get(`${API_URL}/healthcheck`, () => {
    return HttpResponse.json(
      {
        healthy: true,
      },
      { status: 200 }
    );
  }),
];
