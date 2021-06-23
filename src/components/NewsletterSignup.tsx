import { cx } from 'linaria';
import React from 'react';

import { mailchimpForm } from '../../data/config';
import { newsletterSignup as strings } from '../../data/strings';
import * as linkStyles from './Link.styles';
import * as styles from './NewsletterSignup.styles';

const MailChimpFormLarge: React.FC = () => (
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
        className={cx(styles.buttonLarge, linkStyles.button)}
        type="submit"
        value="Subscribe"
        name="subscribe"
      />
    </form>
  </div>
);

const MailChimpForm: React.FC = () => (
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

export const NewsletterSignupLarge: React.FC = () => (
  <section className={styles.rootLarge}>
    <p>{strings.textQuestion}</p>
    <p>{strings.textCTA}</p>
    <MailChimpFormLarge />
  </section>
);

export const NewsletterSignup: React.FC = () => (
  <section className={styles.root}>
    <MailChimpForm />
  </section>
);
