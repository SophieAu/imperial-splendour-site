import { cx } from 'linaria';
import React from 'react';

import { mailchimpForm } from '../../data/config';
import { newsletterSignup as strings } from '../../data/strings';
import * as linkStyles from './Link.styles';
import * as styles from './NewsletterSignup.styles';

const MailChimpForm = () => (
  <div id="mc_embed_signup">
    <form action={mailchimpForm.action} method="post" target="_blank" noValidate>
      <input
        type="email"
        name="EMAIL"
        placeholder={strings.emailPlaceholder}
        required
        aria-label="Email"
      />
      <div id="newsletter-input" aria-hidden="true">
        <input type="text" name={mailchimpForm.inputName} tabIndex={-1} />
      </div>
      <input
        className={cx(styles.button, linkStyles.button)}
        type="submit"
        value="Subscribe"
        name="subscribe"
      />
    </form>
  </div>
);

const NewsletterSignup = () => (
  <section className={styles.root}>
    <p>{strings.textQuestion}</p>
    <p>{strings.textCTA}</p>
    <MailChimpForm />
  </section>
);

export default NewsletterSignup;
