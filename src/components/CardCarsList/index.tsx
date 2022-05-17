import { Vehicle } from "../../type/vehicles";
import { currency } from "../../utils/currency";
import { CardListWrapper, ChassiElement, ListElement, StatusDisponível, StatusReservado, StatusVendido } from "./style";

export const CardCarsList = ({
  brand, 
  chassi, 
  color, 
  km, 
  model, 
  status, 
  value, 
  yer
}:Vehicle) => {

  const renderStatus = () => (
    <>
      { status === "Vendido" && <StatusVendido>{status}</StatusVendido> }
      { status === "Disponível" && <StatusDisponível>{status}</StatusDisponível> }
      { status === "Reservado" && <StatusReservado>{status}</StatusReservado> }
    </>
  )

  return (
    <CardListWrapper>
      <ListElement >{brand}</ListElement>
      <ListElement >{model}</ListElement>
      <ListElement >{yer}</ListElement>
      <ListElement >{km}</ListElement>
      <ListElement >{color}</ListElement>
      <ListElement>{renderStatus()}</ListElement>
      <ChassiElement id="chassi"  >{chassi}</ChassiElement>
      <ListElement >{currency(value)}</ListElement>
    </CardListWrapper>
)
}