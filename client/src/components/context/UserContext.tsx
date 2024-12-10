import { createContext, useState } from "react";
import { UserContextType } from "../../types/userContext";
import { User } from "../../types/user";


// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType>({ user: null, setUser: () => {} });

interface UserContextProps {
  children: React.ReactNode,
}

export const UserContextProvider = ({children}: UserContextProps) => {
  const [user, setUser] = useState<User | null>(null)
  return (
    <UserContext.Provider value={ { user, setUser } }>
      {children}
    </UserContext.Provider>
  )
}



