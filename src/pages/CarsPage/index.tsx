import { Section } from "../../components/Section"
import { Container } from "../../components/Containers/styles"
import { CarsList } from "../../components/CarsList"
import { useVehicles } from "../../context/Vehicles"
import { useEffect, useState } from "react"
import { Vehicle } from "../../type/vehicles"
import { useCurrentData } from "../../hooks/useCurrentData"

export const CarsPage = () => {
  const { vehicles } = useVehicles()

  const pageSize = 7
  const { 
    currentPage,
    setCurrentPage,
    currentData } = useCurrentData({data: vehicles, pageSize})

  return (
    <Container>
      <h1>Todos Veículos</h1>
      <Section 
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={vehicles}
        title="Listagem geral de veículos">
        <CarsList vehicles={currentData}/>
      </Section>
    </Container>
  )
}

