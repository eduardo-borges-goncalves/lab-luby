import { NextBtnWrapper } from "./styles";
import { FC, ReactNode } from "react";
import { ArrowLeft } from "../../ArrowLeft";

type Props = {
  children?: ReactNode,
  onClick?: () => void, 
  disabled: boolean
}


export const NextBtn:FC<Props> = ({children, onClick,   disabled}) => (
  <NextBtnWrapper   disabled={disabled} onClick={onClick} >
    {children}
    <ArrowLeft style={{ transform: "rotate(180deg)" }} />
  </NextBtnWrapper>
)