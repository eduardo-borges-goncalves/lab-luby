import { PreviousBtnWrapper } from "./styles";

import { FC, ReactNode } from "react";
import { ArrowLeft } from "../../ArrowLeft";

type Props = {
  children?: ReactNode,
  onClick?: () => void, 
}

export const PreviousBtn:FC<Props> = ({children, onClick}) => (
  <PreviousBtnWrapper onClick={onClick}>
    <ArrowLeft/>
    {children}
  </PreviousBtnWrapper>
)