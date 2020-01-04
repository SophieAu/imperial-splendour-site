import './about.scss';

import React from 'react';

import Layout from '../components/Layout';
import { slugs } from '../config';
import { about } from '../strings';

const About = () => (
  <Layout title={about.pageTitle} description={about.pageDescription} slug={slugs.about}>
    <div className="about">
      <p>{about.text}</p>
      <h2>{about.contributorTitle}</h2>
      <div className="avatars">
        {about.contributors.map((cont, i) => (
          <div key={i} className="contributor">
            <img src={about.avatarPath(cont.avatar)} alt={about.avatarAlt({ name: cont.name })} />
            <p>{cont.name}</p>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default About;