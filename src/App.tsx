import { useEffect } from "react";
import { Router } from "./routes";
import { GlobalStyle } from "./style/global";

import Cookies from "js-cookie";
import { useAuthentication } from "./context";

export const App = () => {
  const { loading, setIsAuthenticated, isAuthenticated, setLoading } = useAuthentication()

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
    loading ?
      <div></div>
      :
      <>
        <Router/>
        <GlobalStyle/>
      </>
  );
}

