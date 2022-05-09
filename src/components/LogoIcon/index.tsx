import { ReactComponent as Logo1 } from "../../assets/logo/Logo-1.svg"
import { ReactComponent as Logo2 } from "../../assets/logo/Logo-2.svg"
import { LogoIconWrapper } from "./styles"

export const LogoIcon = () => (
  <LogoIconWrapper>
    <Logo1 />
    <Logo2 className="logo2"/>
  </LogoIconWrapper>
)
