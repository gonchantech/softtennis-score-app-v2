export type AuthUser = {
  id: string;
  name: string;
};

export type AuthData = {
  id: string;
  name: string;
  password?: string;
};

export type SignUpCredentials = {
  id: string;
  name: string;
  password: string;
};
