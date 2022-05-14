import { Section } from "../../components/Section"
import { Container } from "../../components/Containers/styles"
import { CarsList } from "../../components/CarsList"
import { useVehicles } from "../../context/Vehicles"

export const CarsPage = () => {
  const { vehicles } = useVehicles()
  
  return (
    <Container>
      <h1>Todos Veículos</h1>
      <Section title="Listagem geral de veículos">
        <CarsList vehicles={vehicles}/>
      </Section>
    </Container>
  )
}

