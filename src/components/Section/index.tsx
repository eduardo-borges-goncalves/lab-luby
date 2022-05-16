import { ReactNode, useState, Dispatch, SetStateAction } from "react"
import { NextBtn } from "../Buttons/NextBtn"
import { PreviousBtn } from "../Buttons/PreviousBtn"
import { Pagination } from "../Pagination"
import { Search } from "../Search"

import { SectionWrapper } from "./styles"

type Props = {
  title: string,
  children: ReactNode,
  list: unknown[],
  initial?: number,
  end?: number,
  setInitial?: Dispatch<SetStateAction<number>>,
  setEnd?: Dispatch<SetStateAction<number>>
}

export const Section = ({
  title,
  children,
  list,
  setInitial,
  setEnd,
  initial,
  end }: Props) => {
  const [startPage, setStartPage] = useState(1)

  const limit = Math.ceil(list.length / 7)

  const handleChangePage = (value: number) => {
    if (limit > 3 && (limit - startPage > 2) && startPage >= 1 && value === 1) {
      setStartPage(startPage + value) // aumentar
    }
    if (limit > 3 && startPage > 1 && value === -1) {
      setStartPage(startPage + value) // diminuir
    }
    setInitial && initial && setInitial(initial + 7)
    setEnd && end && setEnd(end + 7)
  }

  console.log("limit", limit)

  return (
    <SectionWrapper>
      <header>
        <h2>{title}</h2>
        <div className="previousNext">
          <PreviousBtn onClick={() => handleChangePage(-1)} >Anterior</PreviousBtn>
          <Pagination startPage={startPage} pages={limit} />
          <NextBtn onClick={() => handleChangePage(1)} >Próximo</NextBtn>
          <Search style={{ width: "206px" }} />
        </div>
      </header>

      {children}
    </SectionWrapper>
  )
}