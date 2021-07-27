import { createContext, useState } from "react";

export const ModalContext = createContext(null);

const ModalComponent = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <ModalContext.Provider value={{ show, setShow }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalComponent;
