import { useState, useEffect } from "react";
import { renderRoutes } from "react-router-config";
import routes from "./routes";

function App() {
  console.log(routes)
  return renderRoutes(routes);
}

export default App;