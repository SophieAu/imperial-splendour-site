import React from "react";
import Link from "../../components/Link";
import gDrive from "../../assets/download_googledrive.svg";
import mediaFire from "../../assets/download_mediafire.svg";

import "./SuccessMessage.scss";
import { download } from "../../strings";

export default () => (
  <section className="download-confirm">
    <h2>{download.linkInfo}</h2>
    <div className="filehosts">
      <Link to="https://www.moddb.com/mods/imperial-splendour/downloads/reupload-rotr-119b-full">
        <img
          src="https://button.moddb.com/download/medium/169793.png"
          alt="Download RotR 1.1.9b on Mod DB"
        />
      </Link>
      <Link to="https://www.mediafire.com/file/a3acl0132aig3dk/RotR_1.1.9b_full.zip/file">
        <img src={mediaFire} alt="Download RotR 1.1.9b on Mediafire" />
      </Link>
      <Link to="https://drive.google.com/file/d/1hGwMR9gK2Fw_WJBTMV5vlB0rayqP3SPO/view?usp=sharing">
        <img src={gDrive} alt="Download RotR 1.1.9b on Google Drive" />
      </Link>
    </div>
  </section>
);
