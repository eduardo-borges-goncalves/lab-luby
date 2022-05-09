import { Link } from "react-router-dom"

export const HomePage = () => {
  return (
    <section>
      <Link to='/carros'> Carros Gerais</Link>
      <Link to='/carros-reservados'> Carros reservados </Link>
      <Link to='/lista-de-funcionarios'> Lista de Funcionários</Link>
    </section>
  )
}