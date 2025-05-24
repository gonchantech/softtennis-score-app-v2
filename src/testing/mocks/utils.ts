import { IS_TEST } from "@/config/constants";
import { AuthUser, AuthData } from "@/types";

import { testData } from "../testData";

import { db } from "./db";

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

export const AUTH_COOKIE = "auth-token";

const sanitizeUser = (user: AuthData): AuthUser => {
  const sanitizedUser = { ...user };
  delete sanitizedUser.password;
  return sanitizedUser;
};

export const getUser = () => sanitizeUser(testData.users[0]);

// returns the user object and auth token if the provided credentials are valid
export const authenticate = ({
  id,
  name,
  password,
}: {
  id: string;
  name: string;
  password: string;
}) => {
  const user = db.user.findFirst({
    where: {
      id: {
        equals: id,
      },
    },
  });

  if (user?.password === password && user?.name === name) {
    const sanitizedUser = sanitizeUser(user);
    const encodedToken = AUTH_TOKEN;
    return { user: sanitizedUser, jwt: encodedToken };
  }

  throw new Error("Invalid username or password");
};

// extract the token and return the user if exists
export const requireAuth = ({
  req,
  shouldThrow = true,
}: {
  req: Request;
  shouldThrow?: boolean;
}) => {
  if (IS_TEST) {
    return getUser();
  } else {
    console.log("req", req);
    const authHeader = req.headers.get("Authorization");
    let token: string | undefined;

    if (authHeader?.startsWith("Bearer ")) {
      token = authHeader.slice("Bearer ".length);
    }

    if (!token || token !== AUTH_TOKEN) {
      if (shouldThrow) {
        throw new Error("No authorization token provided!");
      }
      return null;
    }

    return getUser();
  }
};

export const signUp = ({
  id,
  name,
  password,
}: {
  id: string;
  name: string;
  password: string;
}) => {
  const existingUser = db.user.findFirst({
    where: {
      id: {
        equals: id,
      },
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const newUser = db.user.create({
    id,
    name,
    password,
  });

  return sanitizeUser(newUser);
};
