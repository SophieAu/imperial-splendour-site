import './MainDownload.scss';

import React from 'react';

import DownloadButton from '../../components/ui/DownloadButton';
import { download } from '../../strings';

const Requirements = () => (
  <div className="requirements">
    <h2>{download.requirements.title}</h2>
    <ul>
      {download.requirements.list.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
);

const Download = () => (
  <div className="download">
    <DownloadButton linkTo="/download/rotr" />
    <p>{download.main.info}</p>
  </div>
);

const MainDownload = () => (
  <section className="container">
    <Requirements />
    <Download />
  </section>
);

export default MainDownload;
