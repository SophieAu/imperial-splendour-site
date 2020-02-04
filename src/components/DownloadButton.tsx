import './DownloadButton.scss';

import React from 'react';

import { downloadButton } from '../../data/strings';
import { cn } from '../helpers';
import Link from './Link';

interface Props {
  linkTo: string;
  className?: string;
}

const DownloadButton: React.FC<Props> = ({ linkTo, className }) => (
  <Link to={linkTo} className={cn('btn-download', className)}>
    {downloadButton.buttonText}
  </Link>
);

export default DownloadButton;
