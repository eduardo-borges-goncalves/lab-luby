import { FC, ReactNode } from "react";
import { RedBtnWrapper } from "./styles";

type Props = {
  children: ReactNode,
  onClick?: any, 
  type?: "button" | "submit" | "reset" | undefined, 
  disabled?: boolean, 
}

export const RedBtn:FC<Props> = ({children, onClick, type, disabled}:Props) => (
  <RedBtnWrapper 
    disabled={disabled}
    type={type}
    onClick={onClick}>
    {children}
  </RedBtnWrapper>
)