import Error from "./../components/Error";
import { useState } from 'react';
const WithErrorComponent = ({ children, isError }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      {children}
          {isError && show && <Error close={setShow }/>}
    </>
  );
};

export default WithErrorComponent;
