import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 left-0 right-0 z-50">
      <Header />

      </div>

      {/* Main */}

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
