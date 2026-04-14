import { paths } from '../config';

export const blog = {
  pageDescription:
    'Follow the Imperial Splendour team and get a deep insight into the development process.',
  previousPage: '< Newer',
  nextPage: 'Older >',
};

export const factions = {
  previousButton: 'Go to previous Faction',
  nextButton: 'Go to next Faction',
};

export const header = {
  logoAlt: 'Imperial Splendour Logo',
  logoLinkLabel: 'Homepage',
  hamburgerA11yLabel: 'Open Navigation Menu',
  exitA11yLabel: 'Close Navigation Menu',
  menuItems: [
    { title: 'Homepage', path: paths.home },
    { title: 'Download', path: paths.downloadIndex },
    { title: 'Factions', path: paths.factions },
    { title: 'Blog', path: paths.blog },
    { title: 'About', path: paths.about },
  ],
};

export const newsletterSignup = {
  textQuestion: "Want to stay informed when there's a new patch or release?",
  textCTA: 'Subscribe to our newsletter:',
  emailPlaceholder: 'george3@british-empire.co.uk',
};

export const post = {
  comments: 'Comments',
  socialMediaCallout: 'Visit us on',
  newsletterCallout: 'and subscribe to our newsletter to stay up to date:',
};



/// -------------------------------------------------------------- OLD

export const SITE_TITLE = 'Imperial Splendour';
export const buildPageTitle = (title: string) => `${title} | ${SITE_TITLE}`;

// ---
// Components

export const downloadButton = {
  buttonText: 'Download',
};


export const download = {
  linkSectionTitle: 'Downloads',
  otherDownloadsSectionTitle: 'Other Downloads / Submods',
};
