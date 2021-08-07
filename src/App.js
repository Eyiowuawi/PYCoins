import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { renderRoutes } from "react-router-config";
import routes from "./routes";

function App() {
  return renderRoutes(routes);
}

export default App;
