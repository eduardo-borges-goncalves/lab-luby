import { ReactNode } from "react"
import { NextBtn } from "../Buttons/NextBtn"
import { PreviousBtn } from "../Buttons/PreviousBtn"
import { Search } from "../Search"

import { SectionWrapper } from "./styles"

type Props ={
  title: string,
  children: ReactNode
}

export const Section = ({title, children}:Props) => (
  <SectionWrapper>
    <header>
      <h2>{title}</h2>
      <div className="previousNext">
        <PreviousBtn>Anterior</PreviousBtn>
        <span>paginação</span>
        <NextBtn>Próximo</NextBtn>
        <Search style={{ width: "206px" }} />
      </div>
    </header>

    {children}
  </SectionWrapper>
)