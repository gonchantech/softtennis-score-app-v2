import { http, HttpResponse } from "msw";

import { API_URL } from "@/config/constants";

import {
  authenticate,
  requireAuth,
  AUTH_COOKIE,
  signUp,
} from "@/testing/mocks/utils";

type LoginCredentials = {
  id: string;
  name: string;
  password: string;
};

const loginHandler = http.post(`${API_URL}/auth/login`, async ({ request }) => {
  const credentials = (await request.json()) as LoginCredentials;
  const { user, jwt } = authenticate(credentials);

  console.log("loginHandler called!!!");
  console.log("credentials", credentials);
  console.log("user", user);
  console.log("jwt", jwt);

  await new Promise((resolve) => setTimeout(resolve, 300));

  return new HttpResponse(JSON.stringify({ data: { user } }), {
    status: 200,
    headers: {
      "Set-Cookie": `${AUTH_COOKIE}=${jwt}; Path=/; SameSite=Lax;`,
      "Content-Type": "application/json",
    },
  });
});

const logoutHandler = http.post(`${API_URL}/auth/logout`, async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return new HttpResponse(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Set-Cookie": `${AUTH_COOKIE}=; Path=/;  Max-Age=0`,
    },
  });
});

const meHandler = http.get(`${API_URL}/auth/me`, async ({ request }) => {
  const user = requireAuth({ req: request, shouldThrow: false });

  await new Promise((resolve) => setTimeout(resolve, 300));

  return new HttpResponse(JSON.stringify(user), {
    status: 200,
  });
});

const signupHandler = http.post(
  `${API_URL}/auth/signup`,
  async ({ request }) => {
    const credentials = (await request.json()) as {
      id: string;
      name: string;
      password: string;
    };
    const user = signUp(credentials);

    await new Promise((resolve) => setTimeout(resolve, 300));

    return new HttpResponse(JSON.stringify({ user }), {
      status: 201,
    });
  }
);

export const authHandlers = [
  loginHandler,
  logoutHandler,
  meHandler,
  signupHandler,
];
