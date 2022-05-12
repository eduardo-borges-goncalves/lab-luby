import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from "react";

type Authentication = {
  isAuthenticated: boolean, 
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>, 
  loading: boolean, 
  setLoading: Dispatch<SetStateAction<boolean>>, 
}

const AuthenticationContext = createContext<Authentication>({
  isAuthenticated: false, 
  setIsAuthenticated: () => {}, 
  loading: true, 
  setLoading: () => {}
})

type AuthenticationProviderProps =  {
  children: ReactNode
}

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> =  ({children}) => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  const [ loading, setLoading ] = useState(true)
  
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated, 
        setIsAuthenticated, 
        loading, 
        setLoading,
      }}
    >
    {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext)

  if (!context) {
    throw new Error("Você somente pode usar este hook debaixo de um <AuthenticationContextProvider")
  }

  return context
}