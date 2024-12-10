import { User } from "./user";

export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User| null>>;
}
