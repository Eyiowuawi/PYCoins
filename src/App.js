import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { ToastContainer,  Flip } from "react-toastify";

function App() {
  return (
    <>
      {renderRoutes(routes)}
      <ToastContainer
        autoClose={8000}
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
