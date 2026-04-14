import discord from '@assets/footer_discord.svg';
import facebook from '@assets/footer_facebook.svg';
import twitter from '@assets/footer_twitter.svg';
import gDrive from '@assets/logo_googledrive.svg?url';
import mediaFire from '@assets/logo_mediafire.svg?url';

import { formatLinkList, type NameLinkTuple } from './util';

export const currentYear = () => new Date().getFullYear();

export const BASE_URL = 'https://imperialsplendour.com';
export const TWITTER_HANDLE = '@SplendourTeam';
const MAILCHIMP_USER = 'd68145bb4360d40f488bd3c5e';
const MAILCHIMP_ID = '263c850834';

export const FALLBACK_IMAGE = '/socialImage.png';

export const pageTitle = (title: string) => `${title} | Imperial Splendour`;

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

export const mailchimpForm = {
  action: `https://imperialsplendour.us19.list-manage.com/subscribe/post?u=${MAILCHIMP_USER}&amp;id=${MAILCHIMP_ID}`,
  inputName: `b_${MAILCHIMP_USER}_${MAILCHIMP_ID}`,
};

export const buildCreditsCopyright = (builders: NameLinkTuple[]) =>
  `© ${currentYear()}, ${formatLinkList(builders)}`


export const imgAlt = {
  avatar: (name: string) => `Avatar of ${name}`,
  filehost: (platform: string) => `"Download RotR 1.1.9b on ${platform}`,
  socialMedia: (platform: string) => `Imperial Splendour on ${platform}`,
};

export const hostImages = [
  { host: 'ModDB', image: 'https://button.moddb.com/download/medium/236128.png' },
  { host: 'MediaFire', image: mediaFire },
  { host: 'Google Drive', image: gDrive },
];

export const socialMediaImages: Record<string, string> = {
  ModDB: 'https://button.moddb.com/popularity/medium/mods/20800.png',
  Facebook: facebook.src,
  Twitter: twitter.src,
  Discord: discord.src,
};
