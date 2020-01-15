import './DownloadButton.scss';

import React from 'react';

import { downloadButton } from '../../../data/strings';
import Link from '../Link';

interface Props {
  linkTo: string;
  className?: string;
}

const DownloadButton: React.FC<Props> = ({ linkTo, className }) => (
  <Link to={linkTo} className={`btn-download${className ? ` ${className}` : ''}`}>
    {downloadButton.buttonText}
  </Link>
);

export default DownloadButton;
