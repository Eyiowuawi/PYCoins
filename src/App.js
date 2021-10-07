import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { ToastContainer, Flip } from "react-toastify";
import Pusher from "pusher-js";
import { useEffect, useContext } from "react";
import { AppContext } from "./context/index";

function App({ history }) {
  return (
    <>
      {renderRoutes(routes)}
      <ToastContainer
        autoClose={5000}
        position="top-right"
        closeOnClick={true}
        pauseOnHover={true}
        pauseOnFocusLoss={false}
        transition={Flip}
      />
    </>
  );
}

export default App;
