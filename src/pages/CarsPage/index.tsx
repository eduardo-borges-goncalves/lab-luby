import { NextBtn } from "../../components/Buttons/NextBtn"
import { PreviousBtn } from "../../components/Buttons/PreviousBtn"
import { Search } from "../../components/Search"
import { CardCarsList, CarsContainer, CarsSection, HeaderCarsList } from "./styles"

export const CarsPage = () => {
  return (
    <CarsContainer>
      <h1>Todos Veículos</h1>
      <CarsSection>
        <header>
          <h2>Listagem geral de veículos</h2>
          <div className="previousNext">
            <PreviousBtn>Anterior</PreviousBtn>
            <span>paginação</span>
            <NextBtn>Próximo</NextBtn>
            <Search style={{width: "206px"}} />
          </div>
        </header>

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

        <CardCarsList>
          <span>Marca</span>
          <span>MODELO</span>
          <span>ANO</span>
          <span>KM</span>
          <span>COR</span>
          <span>STATUS</span>
          <span>CHASSI</span>
          <span>VALOR</span>
        </CardCarsList>
      </CarsSection>

    </CarsContainer>
  )
}

