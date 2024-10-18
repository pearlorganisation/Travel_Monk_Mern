import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout/DefaultLayout";
import Home from "../pages/Home/Home";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import BusContactForm from "../pages/Forms/BusContactForm";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import CustomizeTrip from "../pages/CustomizeTrip/CustomizeTrip";
import EditCustomize from "../pages/EditCustomize/EditCustomize";
import IndianDestinations from "../pages/IndianDestinations/IndianDestinations";
import InternationalDestinations from "../pages/InternatonalDestinations/InternationalDestinations";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import CruizeListing from "../pages/CruizeListing/CruizeListing";
import Hotels from "../pages/Hotels/Hotels";
import BusRides from "../pages/BusTrip/busRide";
import Details from "../pages/BusDetails/Details";
import { ForgotPassword } from "../components/ForgotPassword/ForgotPassword";
import FullyCustomizeTrip from "../pages/FullyCustomizable/FullyCustimzable";
import CruiseContactForm from "../pages/Forms/CruiseContactForm";

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
        path: "/hotels",
        element: <Hotels />,
      },
      {
        path: "/cruize",
        element: <CruizeListing />,
      },
      {
        path: "/fully-customize/:id",
        element: <FullyCustomizeTrip />,
      },
      {
        path: "/hotels/:id",
        element: <ProductDetails />,
      },
      {
        path: "/bus-rides",
        element: <BusRides />,
      },
      {
        path: "/bus",
        element: <BusContactForm />,
      },
      {
        path: "/cruise-form",
        element: <CruiseContactForm />,
      },
      {
        path: "/bus-details",
        element: <Details />,
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
        path: "/customize/:id",
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
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default Routes;
