import { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAuthentication } from "../../context/Authentication";
import apiClient from "../../services/api-client";
import { validateEmail } from "../../utils/validateEmail";

import { LeftPanelLogin, LoginCard, LoginImg } from "./style";
import { Logo } from "../../components/Logo"
import { RedBtn } from "../../components/Buttons/RedBtn";

import LoginPng from "../../assets/login/login-img.png"
import { ReactComponent as Checkbox } from "../../assets/login/checkbox.svg"
import { ReactComponent as ErrorIcon }from "../../assets/login/x.svg"

type LoginFormType = {
  email: string;
  senha: string;
};

const formLoginSchema = yup
  .object({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("E-mail é obrigatório"),
    senha: yup
      .string()
      .required("Senha é obrigatória")
      .min(5, "A senha precisa ter pelo menos 5 caracteres"),
  })
  .required();

export const LoginPage = () => {
  const [ className, setClassName ] = useState({ email: "", senha: "" })
  const [ loading, setLoading ] = useState(false)
  const { setIsAuthenticated } = useAuthentication()

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
    resolver: yupResolver(formLoginSchema)
  })

  const navigate = useNavigate()

  const handleAuthentication: SubmitHandler<LoginFormType> = async (data) => {
    setLoading(true)
    try {
      const response = await apiClient.post("/login", {
        "email": data.email, "password": data.senha
      })
      
      const { token } = response.data
      if (token) {
        setIsAuthenticated(true)
        Cookies.set('access_token', token, { expires: 365 })
        navigate('/')
      }
    } finally { setLoading(false) }
  }

  const handleValidateEmail = (email: string) => {
    validateEmail(email) ? 
      setClassName({...className, email: "validInput"}) : 
      setClassName({...className, email:'errorInput'})
  }

  const handleValidateSenha = (senha: string) => {
    senha.length >= 5 ?
      setClassName({...className, senha: "validInput"}) :
      setClassName({...className, senha:'errorInput'})
  }

  return (
    <>
      <LeftPanelLogin>
        <Logo id="logoLogin" />
        <LoginCard>
          <div className="title">
            <h1>Bem-vindo à AutoLuby</h1>
            <span>Faça o login para acessar a sua conta.</span>
          </div>
          <form onSubmit={handleSubmit(handleAuthentication)}>
            <label>
              Endereço de email
              <input
                className={className.email}
                placeholder="@email.com"
                type="email"
                {...register("email")}
                onChange={(e) => handleValidateEmail(e.target.value)}
              />
              { className.email === "validInput" && <Checkbox  id="validIcon"/> }
              { className.email === "errorInput" && <ErrorIcon id="errorIcon"/> }
            </label>
            <label>
              Senha
              <input
                className={className.senha}
                placeholder="senha"
                type="password"
                {...register("senha")} 
                onChange={(e) => handleValidateSenha(e.target.value)}
              />
              { className.senha === "validInput" && <Checkbox  id="validIcon"/> }
              { className.senha === "errorInput" && <ErrorIcon id="errorIcon"/> }
            </label>
            <div id="forgotPassword">
              <div>
                <div id="loginCheckbox"><Checkbox /></div>
                <Link to="/">Lembrar minha senha</Link>
              </div>
              <Link to="/">Esqueceu a senha?</Link>
            </div>
            <RedBtn type='submit' disabled={loading}>
              {loading ? "Carregando..." : "Entrar"}
            </RedBtn>
          </form>
          <span>
            Ainda não tem uma conta?
            <Link to="/"> Criar Conta</Link>
          </span>
        </LoginCard>
      </LeftPanelLogin>
      <LoginImg src={LoginPng} />
    </>
  )
}