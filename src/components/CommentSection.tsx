import React from 'react';

import { post } from '../../data/strings';
import { Comment } from '../types';
import * as styles from './CommentSection.styles';

const CommentSection: React.FC<{ comments: Comment[] }> = ({ comments }) => (
  <section className={styles.root}>
    <h2>{post.comments}</h2>
    {comments.map(comment => (
      <article key={comment.node.id}>
        <header className={styles.header}>
          <p className={styles.author}>{comment.node.name}</p>
          <p className={styles.date}>{comment.node.date}</p>
        </header>
        <p className={styles.body}>{comment.node.comment}</p>
      </article>
    ))}
  </section>
);

export default CommentSection;
