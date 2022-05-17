import { Section } from "../../components/Section"
import { Container } from "../../components/Containers/styles"
import { CarsList } from "../../components/CarsList"
import { useVehicles } from "../../context/Vehicles"
import { useCurrentData } from "../../hooks/useCurrentData"

export const ReservedCarsPage = () => {
  const { vehicles } = useVehicles()
  const reservedVehicles = vehicles.filter(item => item.status !== "Disponível")

  const pageSize = 7
  const { 
    currentPage,
    setCurrentPage,
    currentData } = useCurrentData({data: reservedVehicles, pageSize})

  return (
    <Container>
      <h1>Seus Veículos</h1>
      <Section 
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={vehicles}
        title="Listagem de veículos reservados e vendidos">
        <CarsList vehicles={currentData} />
      </Section>
    </Container>
  )
}