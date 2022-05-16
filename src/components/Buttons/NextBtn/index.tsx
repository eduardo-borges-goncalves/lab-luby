import { NextBtnWrapper } from "./styles";
import { FC, ReactNode } from "react";
import { ArrowLeft } from "../../ArrowLeft";

type Props = {
  children?: ReactNode,
  onClick?: () => void, 
}


export const NextBtn:FC<Props> = ({children, onClick}) => (
  <NextBtnWrapper onClick={onClick} >
    {children}
    <ArrowLeft style={{ transform: "rotate(180deg)" }} />
  </NextBtnWrapper>
)