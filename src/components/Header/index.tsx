import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { Search } from "../Search";
import { HeaderWrapper } from "./styles";

export const Header = () => (
  <HeaderWrapper>
    <nav>
      <Link to='/'>
        <Logo />
      </Link>

      { window.location.pathname === "/" && <Search/> }

      <Link to='/'>Sair</Link>
    </nav>
  </HeaderWrapper>

)