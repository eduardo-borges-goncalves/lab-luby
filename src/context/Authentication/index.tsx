import Cookies from "js-cookie";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

type Authentication = {
  isAuthenticated: boolean, 
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>, 
  loading: boolean, 
}

const AuthenticationContext = createContext<Authentication>({
  isAuthenticated: false, 
  setIsAuthenticated: () => {}, 
  loading: true, 
})

type AuthenticationProviderProps =  {
  children: ReactNode
}

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> =  ({children}) => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  const [ loading, setLoading ] = useState(true)
  
  useEffect(() => {
    const getAuthentication = () => {
      try {
        const access_token =  Cookies.get('access_token')
        access_token && setIsAuthenticated(true)
      } finally { setLoading(false) }
    }
    
    getAuthentication()
  }, [])
  
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated, 
        setIsAuthenticated, 
        loading, 
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