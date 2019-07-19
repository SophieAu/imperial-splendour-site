import React from "react";
import Link from "../../components/Link";

import "./OtherDownloads.scss";
import { download } from "../../strings";

export default () => (
  <div className="other-downloads">
    <h2>{download.other.title}</h2>
    <ul>
      {download.requirements.list.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
      {download.other.list.map((dload, i) => (
        <li key={i}>
          <Link to={dload.link}>{dload.description}</Link>
        </li>
      ))}
      <li />
    </ul>
  </div>
);
