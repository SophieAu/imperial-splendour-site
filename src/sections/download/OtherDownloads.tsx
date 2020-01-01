import './OtherDownloads.scss';

import React from 'react';

import Link from '../../components/Link';
import { download } from '../../strings';

const OtherDownloads = () => (
  <section className="other-downloads">
    <h2>{download.other.title}</h2>
    <ul>
      {download.other.list.map((dload, i) => (
        <li key={i}>
          <Link to={dload.link}>{dload.description}</Link>
        </li>
      ))}
    </ul>
  </section>
);

export default OtherDownloads;
