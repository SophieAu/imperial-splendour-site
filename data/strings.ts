import { Contributors, InfoBox } from '../src/types';
import { downloadLinks, paths, siteBuilders } from './config';

const SITE_TITLE = 'Imperial Splendour';
const buildPageTitle = (title: string) => `${title} | ${SITE_TITLE}`;

export const contributors: Contributors = {
  pike: 'PikeStance',
  QHH: 'Quintus Hortensius Hortalus',
  oleg2242: 'oleg2242',
  cro: 'Cro_Hunger999',
  tsanada: 'TSanada',
  HD: 'Herr Doctor',
  madOrc: 'mad orc',
  myfate: 'myfate',
};

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
  creditsCopyright: ({ year }: { year: number }) =>
    `© ${year}, [Sophie Au](${siteBuilders.sophie}) and [Malte Lippmann](${siteBuilders.malte})`,
  socialImgAlt: ({ platform }: { platform: string }) => `Imperial Splendour on ${platform}`,
};

const buildWordList = (list: string[]) =>
  list.reduce((ac, word, i) => {
    if (i === 0) return word;
    if (i === list.length - 1) return `${ac} and ${word}`;
    return `${ac}, ${word}`;
  });

export const postHeader = {
  author: ({ author }: { author: (keyof Contributors)[] }) =>
    `By ${buildWordList(author.map(auth => contributors[auth]))}`,
};

// ---
// Pages

export const home = {
  pageTitle: SITE_TITLE,
  pageDescription:
    'Imperial Splendour attempts to create the best Empire: Total War experience possible without destroying the essence of the game.',
  heroTitle: SITE_TITLE,
  heroText: `It is the year 1783. The American Revolution has shown the world that the order of a monarch can be disputed by his own subjects. Colonies can claim independence in the name of Liberty. Events like this could topple the absolute monarchies that ruled Europe for nearly a thousand years.`,
  heroLogoAlt: 'The Imperial Splendour logo',
  infoBoxes: [
    {
      imageKey: 'blackwatch',
      imageAlt: 'The British/Scottish Blackwatch in battle formation',
      text: `Fight in the Revolutionary Wars. Command your armies to destroy the old order or preserve it. Rewrite history. The world is at your feet. To give you an authentic feeling for the battles of this period we created armies with historically accurate uniforms.`,
    },
    {
      imageKey: 'portraits',
      imageAlt: 'Collage of hundreds of historical portraits that appear in the mod',
      text: `But historical accuracy does not end with new fancy uniforms. There are many historical characters in the game that you already know or whose portrait you might have seen in a museum. More than 230 portraits have been added to the game to replace the vanilla portrait sets of ETW and give you an 18th century feeling.`,
    },
    {
      imageKey: 'gameplay',
      imageAlt: 'Screenshot of the HUD a user sees in the game',
      text:
        'Additionally, RotR gives a more authentic feeling on the campaign map. Several factions have a new UI and all have their historical flags. You might also recognize some of the cities and buildings as 3D recreations of their actual historical counterparts.',
    },
  ] as InfoBox[],
};

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
  imageLinkAlt: ({ platform }: { platform: string }) => `"Download RotR 1.1.9b on ${platform}`,
  help: `If you need help, check out the [installation tutorial](${downloadLinks.tutorial}).`,
};

export const about = {
  pageTitle: buildPageTitle('About'),
  pageDescription:
    'Imperial Splendour attempts to create the best Empire: Total War experience possible without destroying the essence of the game.',
  text:
    "Play Empire: Total War the way it should have been. The historically accurate visuals and a soundtrack of contemporary composers transport you into the time of the revolutionary wars. Trade with the historical factions, go to war with historical generals, command armies in historically accurate uniforms. But don't forget: A reworked Campaign and Battle AI make the Great Campaign more challenging. It will not be easy for you to impose onto the world your Imperial Splendour.",
  contributorTitle: 'Contributors',
  contributors: [
    { name: 'PikeStance', avatar: 'pike' },
    { name: 'Quintus Hortensius Hortalus', avatar: 'QHH' },
    { name: 'oleg2242', avatar: 'oleg2242' },
    { name: 'Cro_Hunger999', avatar: 'cro' },
    { name: 'TSanada', avatar: 'tsanada' },
    { name: 'Herr Doctor', avatar: 'HD' },
    { name: 'mad orc', avatar: 'mad_orc' },
    { name: 'myfate', avatar: 'myfate' },
  ],
  avatarAlt: ({ name }: { name: string }) => `Avatar of ${name}`,
};

export const blog = {
  pageTitle: buildPageTitle('Blog'),
  pageDescription:
    'Follow the Imperial Splendour team and get a deep insight into the development process.',
  previousPage: '< Newer',
  nextPage: 'Older >',
};

export const post = {
  pageTitle: ({ title }: { title: string }) => buildPageTitle(title),
  commentForm: 'Post a Comment',
  namePlaceholder: 'Name',
  commentPlaceholder: 'Your comment here',
  tos: `I have read and agree to the [Terms of Service and Privacy Policy](${paths.termsOfService})`,
  commentButtonTitle: 'Submit',
  comments: 'Comments',
  emptyComments: 'Nothing yet.',
};

export const factions = {
  pageTitle: ({ title }: { title: string }) => buildPageTitle(title),
  pageDescription: 'Explore the factions you can lead',
  previousButton: "'Go to previous Faction",
  nextButton: "'Go to next Faction",
};
