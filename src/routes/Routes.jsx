import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout/DefaultLayout";
import Home from "../pages/Home/Home";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Products from "../pages/Product/Product";
import Product from "../pages/Product/Product";
import BusContactForm from "../pages/Forms/BusContactForm";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/bus",
        element: <BusContactForm />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default Routes;
