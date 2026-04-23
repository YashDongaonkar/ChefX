import { createContext, useState } from "react";

export const VisionContext = createContext();

export default function VisionProvider({ children }) {
  const [activeModes, setActiveModes] = useState([]);

  return (
    <VisionContext.Provider value={{ activeModes, setActiveModes }}>
      {children}
    </VisionContext.Provider>
  );
}