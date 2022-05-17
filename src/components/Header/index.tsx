import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useAuthentication } from "../../context/Authentication";
import { Logo } from "../Logo";
import { Logout } from "../Logout";
import { Search } from "../Search";
import { HeaderWrapper } from "./styles";

export const Header = () => {

  const { setIsAuthenticated } = useAuthentication()

  const handleLogout = () => {
    setIsAuthenticated(false)
    Cookies.remove("access_token")
  }

  return (
    <HeaderWrapper>
      <nav>
        <Link to='/'>
          <Logo />
        </Link>

        { window.location.pathname === "/" && <Search/> }

        <Link to='/login' id="sair" onClick={handleLogout}>
          <span> Sair </span>
          <Logout />
        </Link>
      </nav>
    </HeaderWrapper>
  )
}