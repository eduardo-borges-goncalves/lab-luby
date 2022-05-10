import { Link } from "react-router-dom"
import { LinkCard } from "../../components/LinkCard"
import { HomeContainer } from "./styles"
import reservedCars from "../../assets/menu/reserved-cars.jpg"
import cars from "../../assets/menu/cars.jpg"
import employee from "../../assets/menu/employee.jpg"

export const HomePage = () => {


  return (
    <HomeContainer>
      <nav>
        <header>
          <h3>Bem vindo, {`fulano`}</h3>
          <span>Menu</span>
        </header>
        <LinkCard 
          to="/carros-reservados"
          img={reservedCars}
          descriptionImg="suv ford no deserto"
          title="Veículos reservados e vendidos"
          description="Veículos reservados e vendidos por você"
          quantity="147 veículos"  
        />
        <LinkCard 
          to="/carros"
          img={cars}
          descriptionImg="carros estacionados"
          title="Listagem geral de veículos"
          description="Listagem de veículos de toda a empresa"
          quantity="180 veículos"  
          />
        <LinkCard 
          to="/lista-de-funcionarios"
          img={employee}
          descriptionImg="homem de terno com braços cruzados e postura elegante"
          title="Funcionários da empresa"
          description="Listagem de todos os funcionários da empresa"
          quantity="147 funcionários"  
        />
      </nav>
    </HomeContainer>
  )
}