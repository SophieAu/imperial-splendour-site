export const screenSize = {
  DESKTOP: 'and (min-width: 1024px)',
  TABLET_MAX: 'and (max-width: 1023px)',
  TABLET_MIN: 'and (min-width: 992px)',
  TABLET: 'and (min-width: 992px) and (max-width: 1023px)',
  MOBILE: 'and (max-width: 991px)',
};

export const MAX_CONTENT_WIDTH = '65rem';
export const MAX_BODY_WIDTH = '85rem';
export const MAX_SITE_WIDTH = '100rem';
export const HEADER_HEIGHT = '4.5rem';
export const FOOTER_HEIGHT = '4.5rem';
export const FOOTER_MOBILE_HEIGHT = '6.5rem';
export const DOWNLOAD_BUTTON_HEIGHT = '6.25rem';
export const DOWNLOAD_BUTTON_WIDTH = '18.125rem';

export const color = {
  headerFooterBg: '#b19776',
  linkHover: '#5c4e3c',
  blogMeta: '#444',
  mainBg: '#f9eeda',
  white: '#fff',
};

const fontFamily = {
  body: "'IM FELL English', georgia, times, serif",
  heading: "'IM FELL English SC', georgia, serif",
};

export const font = {
  headline: `normal 3rem ${fontFamily.heading}`,
  body: `normal 1.5rem ${fontFamily.body}`,
  button: `normal 2.5rem / ${DOWNLOAD_BUTTON_HEIGHT} ${fontFamily.heading}`,
  hero: `normal 2.15rem ${fontFamily.body}`,
  info: `normal 1.75rem ${fontFamily.body}`,
  blogMeta: `italic 1.25rem ${fontFamily.body}`,
  input: `normal 1rem ${fontFamily.body}`,
};
