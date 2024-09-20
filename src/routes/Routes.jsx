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
import CustomizeTrip from "../pages/CustomizeTrip/CustomizeTrip";
import EditCustomize from "../pages/EditCustomize/EditCustomize";
import IndianDestinations from "../pages/IndianDestinations/IndianDestinations";
import InternationalDestinations from "../pages/InternatonalDestinations/InternationalDestinations";
import PackageDetails from "../pages/PackageDetails/PackageDetails";

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
      {
        path: "/customize",
        element: <CustomizeTrip />,
      },
      {
        path: "/edit-customize",
        element: <EditCustomize />,
      },
      {
        path: "/indian/:id",
        element: <IndianDestinations />,
      },
      {
        path: "/international/:id",
        element: <InternationalDestinations />,
      },
      {
        path: "/packages/:id",
        element: <PackageDetails />,
      },
    ],
  },
]);

export default Routes;
