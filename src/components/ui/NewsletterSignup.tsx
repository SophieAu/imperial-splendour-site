import './NewsletterSignup.scss';

import React from 'react';

import { newsletterSignup as strings } from '../../strings';

const MailChimpForm = () => (
  <div id="mc_embed_signup">
    <form
      action="https://imperialsplendour.us19.list-manage.com/subscribe/post?u=d68145bb4360d40f488bd3c5e&amp;id=263c850834"
      method="post"
      target="_blank"
      noValidate
    >
      <input type="email" name="EMAIL" placeholder={strings.emailPlaceholder} required />
      <div id="newsletter-input" aria-hidden="true">
        <input type="text" name="b_d68145bb4360d40f488bd3c5e_263c850834" tabIndex={-1} />
      </div>
      <input className="btn-download" type="submit" value="Subscribe" name="subscribe" />
    </form>
  </div>
);

const NewsletterSignup = () => (
  <section className="newsletter">
    <p>{strings.textQuestion}</p>
    <p>{strings.textCTA}</p>
    <MailChimpForm />
  </section>
);

export default NewsletterSignup;
