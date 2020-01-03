import './PostHeader.scss';

import React from 'react';

import { slugs } from '../../config';
import { getSlug } from '../../helpers';
import { postHeader } from '../../strings';
import { PostFrontmatter } from '../../types';

const PostHeader: React.FC<PostFrontmatter> = ({ title, date, formattedDate, author }) => (
  <header className="post-header">
    <h1>
      <a href={`${slugs.blog}/${getSlug(title, date)}`}>{title}</a>
    </h1>
    <p className="date">{formattedDate}</p>
    <p className="author">{postHeader.author({ author })}</p>
  </header>
);

export default PostHeader;
