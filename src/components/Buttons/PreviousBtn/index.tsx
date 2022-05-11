import { PreviousBtnWrapper } from "./styles";

import { FC, ReactNode } from "react";
import { ArrowLeft } from "../../ArrowLeft";

type Props = {
  children: ReactNode,
}

export const PreviousBtn:FC<Props> = ({children}) => (
  <PreviousBtnWrapper>
    <ArrowLeft/>
    {children}
  </PreviousBtnWrapper>
)