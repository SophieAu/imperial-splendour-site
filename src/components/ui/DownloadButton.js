import React from "react";
import "./DownloadButton.scss";
import Link from "../Link";

export default ({ linkTo, className }) => (
  <Link to={linkTo} className={`btn-download ${className}`}>
    Download
  </Link>
);
