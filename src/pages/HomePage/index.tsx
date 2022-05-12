import { NavigationHome } from "../../components/NavigationHome"
import { useAuthentication } from "../../context"
import { HomeContainer } from "./styles"

export const HomePage = () => {
  const { isAuthenticated} = useAuthentication()

  return (
    isAuthenticated ? 
      <HomeContainer>
        <NavigationHome/>
      </HomeContainer>
      :
      <div>Faça login para ter acesso ao sistema</div> // melhorar
  )
}