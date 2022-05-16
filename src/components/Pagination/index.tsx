import { PaginationWrapper } from "./styles"

type PaginationProps = {
  startPage: number, 
  pages?: number, 
}

export const Pagination = ({startPage, pages}: PaginationProps) => {

  return (
    <PaginationWrapper >
      { pages === 1 &&
          <li>
            {startPage}
          </li>
      }
      { pages === 2 &&
          <>
            <li>
              {startPage}
            </li>
            <li id="middlePagination">
              {startPage + 1}
            </li>
          </>
      }
      {  pages && pages >= 3 &&
          <>
            <li>
              {startPage}
            </li>
            <li id="middlePagination">
              {startPage + 1}
            </li>
            <li>
              {startPage + 2}
            </li>
          </>
      }
    </PaginationWrapper>
  )
}