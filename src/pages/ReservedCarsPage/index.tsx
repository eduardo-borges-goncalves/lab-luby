import { Section } from "../../components/Section"
import { Container } from "../../components/Containers/styles"
import { CarsList } from "../../components/CarsList"
import { useVehicles } from "../../context/Vehicles"

export const ReservedCarsPage = () => {
  const { vehicles } = useVehicles()

  return (
    <Container>
      <h1>Seus Veículos</h1>
      <Section title="Listagem de veículos reservados e vendidos">
        <CarsList vehicles={vehicles} />
      </Section>
    </Container>
  )
}