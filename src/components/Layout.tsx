import '../styles/main.scss';

import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from './ui/Footer';
import Header from './ui/Header';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=IM+Fell+English" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=IM+Fell+English+SC" rel="stylesheet" />
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
