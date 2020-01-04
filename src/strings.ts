import { paths } from './config';
import { InfoBox } from './types';

const SITE_TITLE = 'Imperial Splendour';
const buildPageTitle = (title: string) => `${title} | ${SITE_TITLE}`;

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
  about: 'About',
  blog: 'Blog',
};

export const footer = {
  creditsCopyright: ({ year }: { year: number }) => `© ${year},`,
  creditsSophie: 'Sophie Au',
  creditsAnd: 'and',
  creditsMalte: 'Malte Lippmann',
  socialImgAlt: ({ platform }: { platform: string }) => `Imperial Splendour on ${platform}`,
};

export const postHeader = {
  author: ({ author }: { author: string }) => `By ${author}`,
};

// ---
// Pages

const infoBoxes: InfoBox[] = [
  {
    image: '/img/info_blackwatch.jpg',
    imageAlt: 'The British/Scottish Blackwatch in battle formation',
    text: `Fight in the Revolutionary Wars. Command your armies to destroy the old order or preserve it. Rewrite history. The world is at your feet. To give you an authentic feeling for the battles of this period we created armies with historically accurate uniforms.`,
  },
  {
    image: '/img/info_portraits.jpg',
    imageAlt: 'Collage of hundreds of historical portraits that appear in the mod',
    text: `But historical accuracy does not end with new fancy uniforms. There are many historical characters in the game that you already know or whose portrait you might have seen in a museum. More than 230 portraits have been added to the game to replace the vanilla portrait sets of ETW and give you an 18th century feeling.`,
  },
  {
    image: '/img/info_gameplay.jpg',
    imageAlt: 'Screenshot of the HUD a user sees in the game',
    text:
      'Additionally, RotR gives a more authentic feeling on the campaign map. Several factions have a new UI and all have their historical flags. You might also recognize some of the cities and buildings as 3D recreations of their actual historical counterparts.',
  },
];

export const home = {
  pageTitle: SITE_TITLE,
  pageDescription:
    'Imperial Splendour attempts to create the best Empire: Total War experience possible without destroying the essence of the game.',
  heroText: `It is the year 1783. The American Revolution has shown the world that the order of a monarch can be disputed by his own subjects. Colonies can claim independence in the name of Liberty. Events like this could topple the absolute monarchies that ruled Europe for nearly a thousand years.`,
  heroLogoAlt: 'The Imperial Splendour logo',
  infoBoxes,
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
  main: {
    info:
      "Imperial Splendour - Rise of the Republic v1.1.9.9 Empire: Total War's 10th anniversary beta",
  },
  other: {
    title: 'Other Downloads',
    list: [
      {
        link: paths.downloadLauncher,
        description: 'Launcher only',
      },
    ],
  },
};

export const downloadRotR = {
  pageTitle: buildPageTitle('Download Rise of the Republic'),
  pageDescription:
    'Download and play Imperial Splendour to have the best Empire: Total War experience possible.',
  linkInfo: 'You can download the files via the following file hosts:',
  imageLinkAlt: ({ platform }: { platform: string }) => `"Download RotR 1.1.9b on ${platform}`,
  helpPre: ' If you need help, check out the',
  helpLink: 'installation tutorial',
  helpPost: '.',
};

export const downloadLauncher = {
  pageTitle: buildPageTitle('Download the Rise of the Republic Launcher'),
  pageDescription:
    'Download and play Imperial Splendour to have the best Empire: Total War experience possible.',
  confirmPreOne: 'Your download should be starting in a second.',
  confirmPreTwo: "If it doesn't,",
  confirmLink: 'download manually',
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
  avatarPath: (avatar: string) => require(`./assets/contributors/${avatar}_portrait.png`),
  avatarAlt: ({ name }: { name: string }) => `Avatar of ${name}`,
};

export const blog = {
  pageTitle: buildPageTitle('Blog'),
  pageDescription:
    'Imperial Splendour attempts to create the best Empire: Total War experience possible without destroying the essence of the game.',
};

export const post = {
  pageTitle: ({ title }: { title: string }) => buildPageTitle(title),
  commentForm: 'Post a Comment',
  namePlaceholder: 'Name',
  commentPlaceholder: 'Your comment here',
  tosPre: 'I have read and sgree to the',
  tosLink: 'Terms of Service and Privacy Policy',
  commentButtonTitle: 'Submit',
  comments: 'Comments',
  emptyComments: 'Nothing yet.',
};
