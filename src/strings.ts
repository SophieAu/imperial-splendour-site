import { paths } from './config';

export const blog = {
  pageDescription:
    'Follow the Imperial Splendour team and get a deep insight into the development process.',
  previousPage: '< Newer',
  nextPage: 'Older >',
};

export const download = {
  linkSectionTitle: 'Downloads',
  otherDownloadsSectionTitle: 'Other Downloads / Submods',
  downloadByHost: (host: string) => `Download RotR on ${host}`,
  releaseBlogLinkTitle: "Release Blog",
  installTutorialLinkTitle: "Installation Tutorial"
};

export const factions = {
  title: "Factions",
  description: 'Explore the factions you can lead',
  previousButton: 'Go to previous Faction',
  nextButton: 'Go to next Faction',
};

export const footer = {
  socialMediaLabel: (platform: string) => `Imperial Splendour on ${platform}`
}

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

export const home = {
  downloadButton: 'Download',
};

export const newsletterSignup = {
  emailInputLabel: 'Email',
  emailPlaceholder: 'george3@british-empire.co.uk',
  submitButton: "Subscribe"
};

export const post = {
  comments: 'Comments',
  socialMediaCallout: 'Visit us on',
  newsletterCallout: 'and subscribe to our newsletter to stay up to date:',
};
