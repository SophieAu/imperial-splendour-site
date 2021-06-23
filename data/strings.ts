import { paths } from './config';

export const SITE_TITLE = 'Imperial Splendour';
export const buildPageTitle = (title: string) => `${title} | ${SITE_TITLE}`;

// ---
// Components

export const newsletterSignup = {
  textQuestion: "Want to stay informed when there's a new patch or release?",
  textCTA: 'Subscribe to our newsletter:',
  emailPlaceholder: 'george3@british-empire.co.uk',
};

export const downloadButton = {
  buttonText: 'Download',
};

export const header = {
  home: 'Homepage',
  logoAlt: 'Imperial Splendour Logo',
  download: 'Download',
  factions: 'Factions',
  about: 'About',
  blog: 'Blog',
  hamburgerA11yLabel: 'Toggle Menu',
  exitA11yLabel: 'Toggle Menu',
  menuItems: [
    { title: 'Homepage', path: paths.home },
    { title: 'Download', path: paths.downloadIndex },
    { title: 'Factions', path: paths.factions },
    { title: 'Blog', path: paths.blog },
    { title: 'About', path: paths.about },
  ],
};

// ---
// Pages

export const blog = {
  pageTitle: buildPageTitle('Blog'),
  pageDescription:
    'Follow the Imperial Splendour team and get a deep insight into the development process.',
  previousPage: '< Newer',
  nextPage: 'Older >',
};

export const post = {
  pageTitle: (title: string) => buildPageTitle(title),
  commentForm: 'Post a Comment',
  namePlaceholder: 'Name',
  commentPlaceholder: 'Your comment here',
  tos: `I have read and agree to the [Terms of Service and Privacy Policy](${paths.termsOfService})`,
  commentButtonTitle: 'Submit',
  comments: 'Comments',
  emptyComments: 'Nothing yet.',
  socialMediaCallout: 'Visit us on',
  newsletterCallout: 'and subscribe to our newsletter to stay up to date:',
};

export const factions = {
  pageTitle: (title: string) => buildPageTitle(title),
  pageDescription: 'Explore the factions you can lead',
  previousButton: "'Go to previous Faction",
  nextButton: "'Go to next Faction",
};

export const download = {
  linkSectionTitle: 'Downloads',
  otherDownloadsSectionTitle: 'Other Downloads',
};
