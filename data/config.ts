export const BASE_URL = 'https://imperialsplendour.com';
export const TWITTER_HANDLE = '@SplendourTeam';
const MAILCHIMP_USER = 'd68145bb4360d40f488bd3c5e';
const MAILCHIMP_ID = '263c850834';

export const FALLBACK_IMAGE = '/socialImage.png';

export const slugs = {
  home: '',
  downloadIndex: 'download',
  downloadRotR: 'download/rotr',
  blog: 'blog',
  about: 'about',
  termsOfService: 'terms-of-service',
  factions: 'factions',
  notFound: '404',
};

export const paths = {
  home: '/',
  downloadIndex: `/${slugs.downloadIndex}`,
  downloadRotR: `/${slugs.downloadRotR}`,
  blog: `/${slugs.blog}`,
  about: `/${slugs.about}`,
  termsOfService: `/${slugs.termsOfService}`,
  factions: `/${slugs.factions}`,
  notFound: `/${slugs.notFound}`,
};

export const socialMedia = {
  twitter: 'https://twitter.com/splendourteam',
  facebook: 'https://www.facebook.com/imperialsplendour/',
  modDB: 'https://www.moddb.com/mods/imperial-splendour',
};

export const siteBuilders = {
  sophie: 'https://sophieau.com',
  malte: 'https://github.com/QuintusHortensiusHortalus',
};

export const downloadLinks = {
  googleDrive: 'https://drive.google.com/open?id=13eCLdH4ZHPUrYEB1-P1j4jI-LsxBqnrl',
  mediaFire:
    'https://www.mediafire.com/file/1fgqofaystt9vhp/RotR_1.1.9.9_anniversary_beta.zip/file',
  modDB:
    'https://www.moddb.com/mods/imperial-splendour/downloads/empire-total-wars-10th-anniversary-beta',
  tutorial: '/blog/2019-03-03-anniversary-beta-installation-tutorial/',
};

export const modDBButton = {
  popularity: 'https://button.moddb.com/popularity/medium/mods/20800.png',
  download: 'https://button.moddb.com/download/medium/175422.png',
};

export const mailchimpForm = {
  action: `https://imperialsplendour.us19.list-manage.com/subscribe/post?u=${MAILCHIMP_USER}&amp;id=${MAILCHIMP_ID}`,
  inputName: `b_${MAILCHIMP_USER}_${MAILCHIMP_ID}`,
};
