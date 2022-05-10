import { ReactComponent as AutoLuby } from "../../assets/logo/AutoLuby.svg"
import { LogoIcon } from "../LogoIcon"
import { LogoWrapper } from "./styles"

export const Logo = () => (
  <LogoWrapper>
    <LogoIcon/> 
    <AutoLuby className="autoLuby"/>
  </LogoWrapper>
)