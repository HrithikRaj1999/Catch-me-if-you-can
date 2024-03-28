import { PropsWithChildren, createContext, useContext, useState } from "react";

interface CopsDetailsType {
  [x: string]: { city: string; vehicle: string };
}
interface CopsContextType {
  copsDetails: CopsDetailsType;
  setCopsDetails: React.Dispatch<React.SetStateAction<CopsDetailsType>>;
}
const CopsContext = createContext({} as CopsContextType);
const CopsContextProvider = ({ children }: PropsWithChildren) => {
  const [copsDetails, setCopsDetails] = useState<CopsDetailsType>({});
  return (
    <CopsContext.Provider value={{ copsDetails, setCopsDetails }}>
      {children} 
    </CopsContext.Provider>
  );
};
export const useCopsContext = () => useContext(CopsContext);

export default CopsContextProvider;
