import { ReactComponent as Vector } from "../../assets/header/Vector.svg"
import { ReactComponent as Vector1 } from "../../assets/header/Vector-1.svg"
import { ReactComponent as Vector2 } from "../../assets/header/Vector-2.svg"

import { LogoutWrapper } from "./styles"

export const Logout = () => (
  <LogoutWrapper>
    <Vector  id="vectorLogout"/>
    <Vector2 id="vector2Logout"/>
    <Vector1 id="vector1Logout"/>
  </LogoutWrapper>
)