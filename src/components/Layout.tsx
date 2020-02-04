import './Layout.scss';

import React from 'react';

import Footer from './Footer';
import Header from './Header';
import SEO from './SEO';

interface Props {
  title: string;
  description: string;
  slug: string;
  children?: React.ReactNode;
  additionalHead?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ title, description, slug, children, additionalHead }) => (
  <>
    <SEO title={title} description={description} slug={slug}>
      <link
        href="https://fonts.googleapis.com/css?family=IM+Fell+English&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=IM+Fell+English+SC&display=swap"
        rel="stylesheet"
      />
      {additionalHead}
    </SEO>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
