import { useMemo } from "react";

type UsePaginationProps =  {
  totalCount: number, 
  pageSize: number, 
  currentPage: number, 
}

export const usePagination = ({
  totalCount,
  pageSize,
  currentPage, 
}: UsePaginationProps) => {
  
  const range = (start:number, end:number) => {
    const length = end - start + 1
    
    return Array.from({ length }, (_, idx) => idx + start)
  };
  
  const paginationRange = useMemo(() => {
    
    const totalPageCount = Math.ceil(totalCount / pageSize)

    const leftSiblingIndex = Math.max(currentPage - 1, 1)
    const rightSiblingIndex = Math.min(currentPage + 1, totalPageCount)

    const middleRange = range(leftSiblingIndex, rightSiblingIndex)

    if (3 >= totalPageCount) {
      return range(1, totalPageCount)
    }
    
    return [...middleRange]
      
  }, [totalCount, pageSize,  currentPage])

  return paginationRange
}