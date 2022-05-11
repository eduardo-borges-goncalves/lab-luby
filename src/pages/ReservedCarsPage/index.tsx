import { Section } from "../../components/Section"
import { Container } from "../../components/Containers/styles"
import { CarsList } from "../../components/CarsList"

export const ReservedCarsPage = () => {
  return (
    <Container>
      <h1>Seus Veículos</h1>
      <Section title="Listagem de veículos reservados e vendidos">
        <CarsList />
      </Section>
    </Container>
  )
}