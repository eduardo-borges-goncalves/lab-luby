import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../context/Authentication";
import apiClient from "../../services/api-client";

type LoginData = {
  login: string; 
  password: string;
}

// admin@luby.com.br

export const LoginPage = () => {
  const [loginData, setLoginData] = useState <LoginData>({
    login: '', 
    password: '' 
  })
  const { setIsAuthenticated } = useAuthentication()

  const navigate = useNavigate()

  const handleAuthentication =async () => {
    const response = await apiClient.post("/login", {
      "email": loginData.login, "password": loginData.password
    })

    const {token} = response.data
    
    if (token) {
      setIsAuthenticated(true)
      Cookies.set('access_token', token, {expires: 365})
      navigate('/')
    }
  }

  return (
    <>
      <input type="text" 
        onChange={e => setLoginData({...loginData, login: e.target.value})}
      />
      <input type="text" 
        onChange={e => setLoginData({...loginData, password: e.target.value})}
      />
      <button onClick={handleAuthentication   }>Entrar</button>
    </>
  )
}