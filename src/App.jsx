import {RouterProvider } from "react-router-dom";

import { StrictMode } from "react";
import Routes from "./routes/Routes";


function App() {
  return <StrictMode>
  <RouterProvider router={Routes} />
  </StrictMode>
}

export default App;
