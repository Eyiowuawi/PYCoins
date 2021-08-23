import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppComponent = ({ children }) => {

  const [register, setRegister] = useState("")
  console.log(register)

  return (
    <AppContext.Provider  value={{register, setRegister}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppComponent;
