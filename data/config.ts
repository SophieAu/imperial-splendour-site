export const BASE_URL = 'https://imperialsplendour.com';
export const TWITTER_HANDLE = '@SplendourTeam';
const MAILCHIMP_USER = 'd68145bb4360d40f488bd3c5e';
const MAILCHIMP_ID = '263c850834';

export const slugs = {
  home: '',
  downloadIndex: 'download',
  downloadLauncher: 'download/launcher',
  downloadRotR: 'download/rotr',
  blog: 'blog',
  about: 'about',
  termsOfService: 'terms-of-service',
  factions: 'factions',
};

export const paths = {
  home: '/',
  downloadIndex: `/${slugs.downloadIndex}`,
  downloadRotR: `/${slugs.downloadRotR}`,
  blog: `/${slugs.blog}`,
  about: `/${slugs.about}`,
  downloadLauncher: `/${slugs.downloadLauncher}`,
  termsOfService: `/${slugs.termsOfService}`,
  factions: `/${slugs.factions}`,
};

export const socialMedia = {
  twitter: 'https://twitter.com/splendourteam',
  facebook: 'https://www.facebook.com/imperialsplendour/',
  modDB: 'https://www.moddb.com/mods/imperial-splendour',
};

export const contributors = {
  sophie: 'https://sophieau.com',
  malte: 'https://github.com/QuintusHortensiusHortalus',
};

export const downloadLinks = {
  googleDrive: 'https://drive.google.com/file/d/1hGwMR9gK2Fw_WJBTMV5vlB0rayqP3SPO/view?usp=sharing',
  mediaFire: 'https://www.mediafire.com/file/a3acl0132aig3dk/RotR_1.1.9b_full.zip/file',
  modDB: 'https://www.moddb.com/mods/imperial-splendour/downloads/reupload-rotr-119b-full',
  tutorial: '/blog/2019-03-03-anniversary-beta-installation-tutorial/',
  launcherOnly:
    'https://github.com/imperial-splendour/imperial-splendour/releases/download/v1.0-beta.2/IS_Launcher.exe',
};

export const modDBButton = {
  popularity: 'https://button.moddb.com/popularity/medium/mods/20800.png',
  download: 'https://button.moddb.com/download/medium/169793.png',
};

export const mailchimpForm = {
  action: `https://imperialsplendour.us19.list-manage.com/subscribe/post?u=${MAILCHIMP_USER}&amp;id=${MAILCHIMP_ID}`,
  inputName: `b_${MAILCHIMP_USER}_${MAILCHIMP_ID}`,
};

export const staticman = {
  action:
    'https://impsplen-staticman.herokuapp.com/v2/entry/SophieAu/imperial-splendour-website/master/',
};
