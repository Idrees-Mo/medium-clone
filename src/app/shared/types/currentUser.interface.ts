import { AuthStateInterface } from "src/app/auth/types/authState.interface";

export interface CurrentUserInterface {
  id: string;
  username: string;
  email: string;
  createAt: string;
  updatedAt: string;
  bio: string | null;
  image: string | null;
  token: string;
}

export interface AppStateInterface {
  auth: AuthStateInterface;
}
