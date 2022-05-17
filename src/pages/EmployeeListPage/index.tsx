import { useState, useEffect } from "react"
import { CardListWrapper } from "../../components/CardCarsList/style"
import { HeaderList } from "../../components/CarsList/styles"
import { Container } from "../../components/Containers/styles"
import { Section } from "../../components/Section"
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
  const [currentPage, setCurrentPage] = useState(1)
  const [employees, setEmployees] = useState<Employee[]>([])
  const [currentData, setCurrentData] = useState<Employee[]>([])
  const pageSize = 7
  
  const getEmployees = async () => {
    const response = await apiClient.get("/employees?noPaginate")
    setEmployees(response.data.employees)
  }

  const updateCurrentData = (data:Employee[]) => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize

    setCurrentData(data.slice(firstPageIndex, lastPageIndex))
  }

  useEffect(() => updateCurrentData(employees), [currentPage, employees])
  useEffect( () => {employees.length === 0 && getEmployees()}, [])

  return (
    <Container>
      <h1>Funcionários</h1>
      <Section 
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={employees}
        title="Listagem de funcionários da empresa">
        <HeaderList>
          <EmployeeHeaderElement>NOME</EmployeeHeaderElement>
          <EmployeeHeaderElement>EMAIL</EmployeeHeaderElement>
          <EmployeeHeaderElement>CPF</EmployeeHeaderElement>
          <EmployeeHeaderElement>VALOR</EmployeeHeaderElement>
          <EmployeeHeaderElement style={{width: "400px"}}>BIO</EmployeeHeaderElement>
        </HeaderList>
        {
          currentData.map(employee => (
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