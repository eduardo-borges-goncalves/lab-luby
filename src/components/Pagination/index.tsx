import classnames from 'classnames';
import { usePagination } from '../../hooks/usePagination';

import { PaginationWrapper } from './styles';
import { PreviousBtn } from '../Buttons/PreviousBtn';
import { NextBtn } from '../Buttons/NextBtn';

type PaginationProps = {
  onPageChange: (_:number) => void,
  totalCount: number,
  currentPage: number,
  pageSize: number,
}

export const Pagination = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize,
}:PaginationProps) => {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]
  
  return (
    <PaginationWrapper>
      <PreviousBtn disabled={ currentPage === 1} onClick={onPrevious}>
        Anterior
      </PreviousBtn>
      <ul>
        {paginationRange.map(pageNumber => (
            <li
              className={classnames({selected: pageNumber === currentPage})}
              onClick={() => onPageChange(pageNumber)} >
              {pageNumber}
            </li>
          )
        )}
      </ul>
      <NextBtn disabled={ currentPage === lastPage} onClick={onNext}>
        Próximo
      </NextBtn>
    </PaginationWrapper>
  )
}
