import React from "react";
import DownloadButton from "../../components/ui/DownloadButton";

import "./MainDownload.scss";
import { download } from "../../strings";

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

export default () => (
  <div className="container">
    <Requirements />
    <Download />
  </div>
);
