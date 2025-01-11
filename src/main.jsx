import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "mapbox-gl/dist/mapbox-gl.css";

import { Provider } from "react-redux";
import { store, persistor } from "./features/store.jsx";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PrimeReactProvider>
        <App />
        </PrimeReactProvider>
      </PersistGate>
    </Provider>
  </>
);
