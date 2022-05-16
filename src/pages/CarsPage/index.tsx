import { Section } from "../../components/Section"
import { Container } from "../../components/Containers/styles"
import { CarsList } from "../../components/CarsList"
import { useVehicles } from "../../context/Vehicles"
import { useState } from "react"

export const CarsPage = () => {
  const [initial, setInitial] = useState(0)
  const [end, setEnd] = useState(7)

  
  const { vehicles } = useVehicles()
  const showVehicles = vehicles.slice(initial, end)

  console.log(showVehicles)
  
  return (
    <Container>
      <h1>Todos Veículos</h1>
      <Section 
        end={end}
        initial={initial}
        setInitial={setInitial}
        setEnd={setEnd}
        list={vehicles}
        title="Listagem geral de veículos">
        <CarsList vehicles={showVehicles}/>
      </Section>
    </Container>
  )
}

