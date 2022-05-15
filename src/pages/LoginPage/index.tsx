import Cookies from "js-cookie";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../context/Authentication";
import apiClient from "../../services/api-client";

import { LeftPanelLogin, LoginCard, LoginImg } from "./style";
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Inputs";
import { RedBtn } from "../../components/Buttons/RedBtn";

import LoginPng from "../../assets/login/login-img.png"
import {ReactComponent as Checkbox} from "../../assets/login/checkbox.svg"

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
      <LeftPanelLogin>
        <Logo id="logoLogin"/>
        <LoginCard>
          <div className="title">
            <h1>Bem-vindo à AutoLuby</h1>
            <span>Faça o login para acessar a sua conta.</span>
          </div>
          
          <Input
            className="input"
            label="Endereço de email"
            placeholder="@email.com"
            type="email"
            onChange={e => setLoginData({...loginData, login: e.target.value})}
            />
          <Input
            className="input"
            label="Senha"
            placeholder="senha"
            type="password"
            onChange={e => setLoginData({...loginData, password: e.target.value})}
            />
          
          <div id="forgotPassword">
            <div>
              <div id="loginCheckbox">
                <Checkbox/>
              </div>
              <Link to="/">Lembrar minha senha</Link>
            </div>
            <Link to="/">Esqueceu a senha?</Link>
          </div>
          <RedBtn  onClick={handleAuthentication }>Entrar</RedBtn>
          <span>
            Ainda não tem uma conta?
            <Link to="/"> Criar Conta</Link>
          </span>
        </LoginCard>
        
      </LeftPanelLogin>
      <LoginImg src={LoginPng}/>
   
    </>
  )
}