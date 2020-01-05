import './PostHeader.scss';

import React from 'react';

import { slugs } from '../../config';
import { postHeader } from '../../strings';
import { PostFrontmatter } from '../../types';
import Link from '../Link';

interface Props extends PostFrontmatter {
  slug: string;
  isHeaderClickable: boolean;
}

const PostHeader: React.FC<Props> = props => (
  <header className="post-header">
    <h1>
      {props.isHeaderClickable ? (
        <Link to={`${slugs.blog}/${props.slug}`}>{props.title}</Link>
      ) : (
        <>{props.title}</>
      )}
    </h1>
    <p className="date">{props.formattedDate}</p>
    <p className="author">{postHeader.author({ author: props.author })}</p>
  </header>
);

export default PostHeader;
