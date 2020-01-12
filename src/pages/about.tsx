import './about.scss';

import React from 'react';

import Layout from '../components/Layout';
import { slugs } from '../config';
import { about } from '../strings';

const About = () => (
  <Layout title={about.pageTitle} description={about.pageDescription} slug={slugs.about}>
    <p className="about-text">{about.text}</p>
    <section className="contributors">
      <h2>{about.contributorTitle}</h2>
      <ul className="avatars">
        {about.contributors.map((cont, i) => (
          <li key={i} className="contributor">
            <img src={about.avatarPath(cont.avatar)} alt={about.avatarAlt({ name: cont.name })} />
            <p>{cont.name}</p>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default About;
