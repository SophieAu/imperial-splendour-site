import './PostHeader.scss';

import React from 'react';

import { slugs } from '../../config';
import { getSlug } from '../../helpers';
import { postHeader } from '../../strings';
import { PostFrontmatter } from '../../types';
import Link from '../Link';

const PostHeader: React.FC<PostFrontmatter> = ({ title, date, formattedDate, author }) => (
  <header className="post-header">
    <h1>
      <Link to={`${slugs.blog}/${getSlug(title, date)}`}>{title}</Link>
    </h1>
    <p className="date">{formattedDate}</p>
    <p className="author">{postHeader.author({ author })}</p>
  </header>
);

export default PostHeader;
