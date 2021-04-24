import React from 'react';

import { slugs } from '../../data/config';
import { PostFrontmatter } from '../types';
import { Link } from './Link';
import * as styles from './PostHeader.styles';

interface Props extends PostFrontmatter {
  slug?: string;
  isHeaderClickable: boolean;
}

const PostHeader: React.FC<Props> = props => (
  <header className={styles.root}>
    <h1>
      {props.isHeaderClickable && props.slug ? (
        <Link to={`/${slugs.blog}/${props.slug}`}>{props.title}</Link>
      ) : (
        <>{props.title}</>
      )}
    </h1>
    <p className={styles.date}>{props.formattedDate}</p>
  </header>
);

export default PostHeader;
