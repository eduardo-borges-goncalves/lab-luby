import { FC, ReactNode } from "react";
import { RedBtnWrapper } from "./styles";

type Props = {
  children: ReactNode,
  onClick?: any
}

export const RedBtn:FC<Props> = ({children, onClick}:Props) => (
  <RedBtnWrapper onClick={onClick}>
    {children}
  </RedBtnWrapper>
)