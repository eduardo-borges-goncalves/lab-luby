import { NavigationHome } from "../../components/NavigationHome"
import { useAuthentication } from "../../context/Authentication"
import { HomeContainer } from "./styles"

export const HomePage = () => {
  const { isAuthenticated} = useAuthentication()

  return (
      <HomeContainer>
        <NavigationHome/>
      </HomeContainer>
  )
}