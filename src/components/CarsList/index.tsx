import { HeaderCarsList, HeaderElement } from "./styles"
import { CardCarsList } from "../CardCarsList"

import { Vehicle } from "../../type/vehicles"

type CarsListProps = {
  vehicles: Vehicle[], 
}

export const CarsList = ({vehicles}:CarsListProps )=> {
  return (
    <>
      <HeaderCarsList >
        <HeaderElement>MARCA</HeaderElement>
        <HeaderElement>MODELO</HeaderElement>
        <HeaderElement>ANO</HeaderElement>
        <HeaderElement>KM</HeaderElement>
        <HeaderElement>COR</HeaderElement>
        <HeaderElement>STATUS</HeaderElement>
        <HeaderElement style={{ width: "280px"}}>CHASSI</HeaderElement>
        <HeaderElement>VALOR</HeaderElement>
      </HeaderCarsList>
    { vehicles.map(vehicle => <CardCarsList {...vehicle}/> ) }
    </>
  )
}