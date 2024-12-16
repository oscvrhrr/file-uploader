import { createContext, Dispatch, SetStateAction } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const RefreshContext = createContext<{ refresh: boolean; setRefresh: Dispatch<SetStateAction<boolean>> }>({
  refresh: false,
  setRefresh: () => {}
});

interface RefreshContextProps {
  children: React.ReactNode;
  value: { refresh: boolean; setRefresh: Dispatch<SetStateAction<boolean>> }
}


export const RefreshContextProvider = ({children, value}: RefreshContextProps) => {



  return (
    <RefreshContext.Provider value={value}>
      {children}
    </RefreshContext.Provider>


  )
}
