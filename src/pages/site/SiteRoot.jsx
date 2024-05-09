import React from "react";
import Header from "../../layout/site/Header/Header";
import Footer from "../../layout/site/Footer/Footer";
import { Outlet } from "react-router";

const SiteRoot = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default SiteRoot;
