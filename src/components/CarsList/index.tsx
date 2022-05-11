import { HeaderCarsList } from "./styles"
import { CardCarsList } from "../CardCarsList"

export const CarsList = () => {

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

      <CardCarsList />
    </>
  )

}