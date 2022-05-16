import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useAuthentication } from "../../context/Authentication";

export const PrivateRoute = () => {
  const {isAuthenticated} = useAuthentication()

  return (
    !isAuthenticated?
      <Navigate to="/login" replace /> :
      <Layout />
  )
}
