import { ReactComponent as AutoLuby } from "../../assets/logo/AutoLuby.svg"
import { LogoIcon } from "../LogoIcon"
import { LogoWrapper } from "./styles"

type LogoProps ={
  id?:string, 
}

export const Logo = ({id}:LogoProps) => (
  <LogoWrapper id={id}>
    <LogoIcon/> 
    <AutoLuby className="autoLuby"/>
  </LogoWrapper>
)