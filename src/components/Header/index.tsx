import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { Logout } from "../Logout";
import { Search } from "../Search";
import { HeaderWrapper } from "./styles";

export const Header = () => (
  <HeaderWrapper>
    <nav>
      <Link to='/'>
        <Logo />
      </Link>

      { window.location.pathname === "/" && <Search/> }

      <Link to='/login' id="sair">
        <span> Sair </span>
        <Logout />
      </Link>
    </nav>
  </HeaderWrapper>

)