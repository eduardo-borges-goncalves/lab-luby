import { HeaderCarsList } from "./styles"
import { CardCarsList } from "../CardCarsList"

import { Vehicle } from "../../type/vehicles"

type CarsListProps = {
  vehicles: Vehicle[], 
}

export const CarsList = ({vehicles}:CarsListProps )=> {
  return (
    <>
      <HeaderCarsList >
        <span>MARCA</span>
        <span>MODELO</span>
        <span>ANO</span>
        <span>KM</span>
        <span>COR</span>
        <span>STATUS</span>
        <span>CHASSI</span>
        <span>VALOR</span>
      </HeaderCarsList>
    { vehicles.map(vehicle => <CardCarsList {...vehicle}/> ) }
    </>
  )
}