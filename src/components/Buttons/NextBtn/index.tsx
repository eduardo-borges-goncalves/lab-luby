import { NextBtnWrapper } from "./styles";
import { FC, ReactNode } from "react";
import { ArrowLeft } from "../../ArrowLeft";

type Props = {
  children: ReactNode,
}

export const NextBtn:FC<Props> = ({children}) => (
  <NextBtnWrapper>
    {children}
    <ArrowLeft style={{ transform: "rotate(180deg)" }} />
  </NextBtnWrapper>
)