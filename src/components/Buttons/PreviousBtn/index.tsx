import { PreviousBtnWrapper } from "./styles";

import { FC, ReactNode } from "react";
import { ArrowLeft } from "../../ArrowLeft";

type Props = {
  children?: ReactNode,
  onClick?: () => void,
  disabled: boolean 
}

export const PreviousBtn:FC<Props> = ({children, onClick, disabled}) => (
  <PreviousBtnWrapper   disabled={disabled} onClick={onClick}>
    <ArrowLeft/>
    {children}
  </PreviousBtnWrapper>
)