import React from "react";
import Header from "./components/Header/index";
import Footer from "./components/Contact/index";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
