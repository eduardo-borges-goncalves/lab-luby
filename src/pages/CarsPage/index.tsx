import { Section } from "../../components/Section"
import { Container } from "../../components/Containers/styles"
import { CarsList } from "../../components/CarsList"
import { useEffect } from "react"
import apiClient from "../../services/api-client"

export const CarsPage = () => {
  
  // useEffect(() => {
  //   const getCars = async () => {
  //     const response = await apiClient.get("/vehicles")
  //   }
  
  //   getCars()
  // }, [])

  return (
    <Container>
      <h1>Todos Veículos</h1>
      <Section title="Listagem geral de veículos">
        <CarsList />
      </Section>
    </Container>
  )
}

