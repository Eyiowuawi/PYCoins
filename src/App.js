import { useState, useEffect } from "react";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { ToastContainer, Slide, Zoom, Flip, Bounce } from "react-toastify";

function App() {
  return (
    <>
      {renderRoutes(routes)}
      <ToastContainer
        autoClose={8000}
        position="top-right"
        closeOnClick={true}
        pauseOnHover={true}
        pauseOnFocusLoss={true}
        transition={Flip}
      />
    </>
  );
}

export default App;
