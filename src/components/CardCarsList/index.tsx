import { Vehicle } from "../../type/vehicles";
import { CardCarsListWrapper } from "./style";

export const CardCarsList = ({
  brand, 
  chassi, 
  color, 
  km, 
  model, 
  status, 
  value, 
  yer
}:Vehicle) => (
  <CardCarsListWrapper>
    <span>{brand}</span>
    <span>{model}</span>
    <span>{yer}</span>
    <span>{km}</span>
    <span>{color}</span>
    <span>{status}</span>
    <span>{chassi}</span>
    <span>{value}</span>
  </CardCarsListWrapper>
)