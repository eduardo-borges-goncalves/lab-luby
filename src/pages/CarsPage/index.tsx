import { Section } from "../../components/Section"
import { Container } from "../../components/Containers/styles"
import { CarsList } from "../../components/CarsList"


export const CarsPage = () => {
  return (
    <Container>
      <h1>Todos Veículos</h1>
      <Section title="Listagem geral de veículos">
        <CarsList />
      </Section>
    </Container>
  )
}

