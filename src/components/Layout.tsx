import React from 'react';

import { detectNoScript, detectWebpSupport } from '../util';
import Footer from './Footer';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import * as styles from './Layout.styles';
import SEO from './SEO';

interface Props {
  title: string;
  description: string;
  slug: string;
  children?: React.ReactNode;
  additionalHead?: React.ReactNode;
  ogImage?: string;
}

const Layout: React.FC<Props> = props => {
  const { title, description, slug, children, additionalHead, ogImage } = props;

  return (
    <>
      <Head title={title} description={description} slug={slug} ogImage={ogImage}>
        {additionalHead}
      </Head>
      <HeaderDesktop className={styles.headFoot} />
      <HeaderMobile className={styles.headFoot} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.headFoot} />
    </>
  );
};

const Head: React.FC<Props> = ({ title, description, slug, additionalHead, ogImage }) => (
  <SEO title={title} description={description} slug={slug} ogImagePath={ogImage}>
    <link
      href="https://fonts.googleapis.com/css?family=IM+Fell+English&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=IM+Fell+English+SC&display=swap"
      rel="stylesheet"
    />
    <script type="text/javascript">{detectWebpSupport}</script>
    <script type="text/javascript">{detectNoScript}</script>
    {additionalHead}
  </SEO>
);

export default Layout;
