import React from "react";
import { Helmet } from "react-helmet";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import "../styles/main.scss";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=IM+Fell+English"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=IM+Fell+English+SC"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
