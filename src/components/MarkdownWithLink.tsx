/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import Link from './Link';

const MARKDOWN_LINK_REGEX = /(\[[^\]]+\]\([^\)]+\))/;

interface Props {
  children: string;
  className?: string;
}

const MarkdownWithLink: React.FC<Props> = ({ children, className }) => (
  <p className={className}>
    {children.split(MARKDOWN_LINK_REGEX).map((subString, i) => {
      if (!/^[\[]/.test(subString)) return subString;

      const [_, text, link] = subString.split(/\[([^\]]+)\]\(([^\)]+)\)/);
      return (
        <Link key={i} to={link}>
          {text}
        </Link>
      );
    })}
  </p>
);

export default MarkdownWithLink;
