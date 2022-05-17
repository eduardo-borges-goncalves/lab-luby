import { ReactNode, Dispatch, SetStateAction } from "react"
import { NextBtn } from "../Buttons/NextBtn"
import { PreviousBtn } from "../Buttons/PreviousBtn"
import { Pagination } from "../Pagination"

import { Search } from "../Search"

import { SectionWrapper } from "./styles"

type Props = {
  title: string,
  children: ReactNode,
  data: unknown[],
  currentPage: number, 
  setCurrentPage: Dispatch<SetStateAction<number>>, 
  pageSize: number, 
}

export const Section = ({
  title,
  children,
  data, 
  currentPage, 
  setCurrentPage, 
  pageSize
}: Props) => {

  return (
    <SectionWrapper>
      <header>
        <h2>{title}</h2>
        <div className="previousNext">
          <Pagination
            pageSize={pageSize}
            currentPage={currentPage}
            totalCount={data.length}
            onPageChange={page => setCurrentPage(page)}
          />
          <Search style={{ width: "206px" }} />
        </div>
      </header>

      {children}
    </SectionWrapper>
  )
}