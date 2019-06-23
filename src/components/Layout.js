import React from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import "../styles/main.scss";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
