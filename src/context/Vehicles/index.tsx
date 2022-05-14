import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { Vehicle } from "../../type/vehicles";
import { useAuthentication } from "../Authentication";

type VehiclesProps = {
  vehicles: Vehicle[], 
  setVehicles: Dispatch<SetStateAction<Vehicle[]>>, 
}

const VehiclesContext = createContext<VehiclesProps>({
  vehicles: [], 
  setVehicles: () => {}, 
})

type VehiclesProviderProps =  {
  children: ReactNode
}

export const VehiclesProvider: React.FC<VehiclesProviderProps> =  ({children}) => {
  const [ vehicles, setVehicles ] = useState <Vehicle[]>([])
  const { isAuthenticated } = useAuthentication()

  useEffect(() => {
    const getCars = async () => {
      const response = await apiClient.get("/vehicles?noPaginate")
      setVehicles(response.data.vehicles)
    }
  
    if (isAuthenticated && vehicles.length === 0) getCars()
    if (!isAuthenticated && vehicles.length > 0) setVehicles([])
  }, [isAuthenticated])
  
  return (
    <VehiclesContext.Provider
      value={{
        vehicles, 
        setVehicles, 
      }}
    >
    {children}
    </VehiclesContext.Provider>
  )
}

export const useVehicles = () => {
  const context = useContext(VehiclesContext)

  if (!context) {
    throw new Error("Você somente pode usar este hook debaixo de um <VehiclesContextProvider")
  }

  return context
}