import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { VehiclesProvider } from "../context/Vehicles";
import { CarsPage } from "../pages/CarsPage";
import { EmployeeListPage } from "../pages/EmployeeListPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ReservedCarsPage } from "../pages/ReservedCarsPage";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/carros" element={
          <VehiclesProvider>
            <CarsPage />
          </VehiclesProvider>
        } />
        <Route path="/carros-reservados" element={
          <VehiclesProvider>
            <ReservedCarsPage />
          </VehiclesProvider>
        } />
        <Route path="/lista-de-funcionarios" element={<EmployeeListPage />} />
      </Route>

      <Route path="/login" element={ <LoginPage /> } />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)