import { useState, useEffect } from "react"
import { CardListWrapper } from "../../components/CardCarsList/style"
import { HeaderElement, HeaderList } from "../../components/CarsList/styles"
import { Container } from "../../components/Containers/styles"
import { Section } from "../../components/Section"
import { useVehicles } from "../../context/Vehicles"
import apiClient from "../../services/api-client"
import { currency } from "../../utils/currency"
import { EmployeeListElement, EmployeeHeaderElement} from "./style"

type Employee = {
  bio: string,
  cpf: string, 
  email: string, 
  name: string,
  salary: number
}

export const EmployeeListPage = () => {
  const [ employees, setEmployees ] = useState<Employee[]>([])

  const getEmployees = async () => {
    const response = await apiClient.get("/employees?noPaginate")
    setEmployees(response.data.employees)
  }

  useEffect( () => {
    getEmployees()
  }, [])

  return (
    <Container>
      <h1>Funcionários</h1>
      <Section 
        list={employees}
        title="Listagem de funcionários da empresa">
        <HeaderList>
          <EmployeeHeaderElement>NOME</EmployeeHeaderElement>
          <EmployeeHeaderElement>EMAIL</EmployeeHeaderElement>
          <EmployeeHeaderElement>CPF</EmployeeHeaderElement>
          <EmployeeHeaderElement>VALOR</EmployeeHeaderElement>
          <EmployeeHeaderElement style={{width: "400px"}}>BIO</EmployeeHeaderElement>
        </HeaderList>
        {
          employees && employees.map(employee => (
            <>
            <CardListWrapper>
              <EmployeeListElement>{employee.name}</EmployeeListElement>
              <EmployeeListElement>{employee.email}</EmployeeListElement>
              <EmployeeListElement>{employee.cpf}</EmployeeListElement>
              <EmployeeListElement>{currency(employee.salary)}</EmployeeListElement>
              <EmployeeListElement style={{width: "400px"}}>{employee.bio}</EmployeeListElement>
            </CardListWrapper>
            </>
          ))
        }
      </Section>
    </Container>
  )
}