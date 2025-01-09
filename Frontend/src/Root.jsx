import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
function Root() {
  const location = useLocation();
  const hide = location.pathname === "/" || location.pathname === "/signup";

  return (
    <>
      {!hide && <Header />}

      <Outlet />
      {!hide && <Footer />}
    </>
  );
}

export default Root;
