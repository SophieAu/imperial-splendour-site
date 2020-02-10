import './Layout.scss';

import React from 'react';

import { detectNoScript, detectWebpSupport } from '../util';
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
      <script>{detectWebpSupport}</script>
      <script>{detectNoScript}</script>
      {additionalHead}
    </SEO>
    <Header />
    <main className="noscript">{children}</main>
    <Footer />
  </>
);

export default Layout;
