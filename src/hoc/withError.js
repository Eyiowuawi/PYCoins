import Error from "./../components/Error";
import { useState } from "react";
const WithErrorComponent = ({ children, isError }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      {/* isError &&
      {children}
      {<Error close={setShow} />} */}
      {isError ? <Error /> : children}
    </>
  );
};

export default WithErrorComponent;
