import React from "react";
import "./DownloadButton.scss";
import Link from "../Link";

export default ({ className }) => (
  <Link to="/download" className={`btn-download ${className}`}>
    Download
  </Link>
);
