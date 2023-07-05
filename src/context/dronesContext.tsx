import React, {
  Children,
  createContext,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import { IDroneProperties } from '../models/app';

interface IDronesContext {
  drones: IDroneProperties[];
  addDrones: (drones: IDroneProperties[]) => void;
}

export const DronesContext = createContext<IDronesContext>({} as any);

interface Props {
  children: ReactNode;
}
export const DronesContextProvider = ({ children }: Props) => {
  const [drones, setDrones] = useState<IDroneProperties[]>([]);

  const addDrones = useCallback((drones: IDroneProperties[]) => {
    setDrones(drones);
  }, []);

  return (
    <DronesContext.Provider value={{ drones, addDrones }}>
      {children}
    </DronesContext.Provider>
  );
};
