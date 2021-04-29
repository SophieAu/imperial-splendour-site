import { downloadLinks, paths, siteBuilders } from './config';

const SITE_TITLE = 'Imperial Splendour';
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

export const footer = {
  creditsCopyright: (year: number) =>
    `© ${year}, [Sophie Au](${siteBuilders.sophie}) and [Malte Lippmann](${siteBuilders.malte})`,
  socialImgAlt: (platform: string) => `Imperial Splendour on ${platform}`,
};

// ---
// Pages

export const download = {
  pageTitle: buildPageTitle('Download'),
  pageDescription:
    'Download and play Imperial Splendour to have the best Empire: Total War experience possible.',
  requirements: {
    title: 'Requirements',
    list: [
      'Empire: Total War',
      'At least 10GB hard drive space',
      'To use the launcher: at least Windows 7',
    ],
  },
  main:
    "Imperial Splendour - Rise of the Republic v1.1.9.9 Empire: Total War's 10th anniversary beta",
};

export const downloadRotR = {
  pageTitle: buildPageTitle('Download Rise of the Republic'),
  pageDescription:
    'Download and play Imperial Splendour to have the best Empire: Total War experience possible.',
  linkInfo: 'You can download the files via the following file hosts:',
  imageLinkAlt: (platform: string) => `"Download RotR 1.1.9b on ${platform}`,
  help: `If you need help, check out the [installation tutorial](${downloadLinks.tutorial}).`,
};

export const keep = {
  avatarAlt: (name: string) => `Avatar of ${name}`,
};

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
};

export const factions = {
  pageTitle: (title: string) => buildPageTitle(title),
  pageDescription: 'Explore the factions you can lead',
  previousButton: "'Go to previous Faction",
  nextButton: "'Go to next Faction",
};

export const notFound = {
  pageTitle: buildPageTitle('404'),
  pageDescription:
    'FImperial Splendour attempts to create the best Empire: Total War experience possible without destroying the essence of the game.',
  title: 'Defeat!',
  body: "You seem to have stumbled upon a page that doesn't exist...",
  imageAlt: 'Narrow defeat',
};
