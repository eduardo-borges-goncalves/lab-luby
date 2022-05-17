import { useEffect, useState } from "react"
import { Vehicle } from "../type/vehicles"

type UseCurrentDataProps =  {
  pageSize: number, 
  data: Vehicle[]
}

export const useCurrentData = ({
  data, 
  pageSize
}:UseCurrentDataProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentData, setCurrentData] = useState< Vehicle[]>([])
  
  useEffect(() => {
    const updateCurrentData = (data:Vehicle[]) => {
      const firstPageIndex = (currentPage - 1) * pageSize
      const lastPageIndex = firstPageIndex + pageSize

      setCurrentData(data.slice(firstPageIndex, lastPageIndex))
    }

    updateCurrentData(data)
  }, [currentPage, data])

  return {currentData, currentPage, setCurrentPage}
}