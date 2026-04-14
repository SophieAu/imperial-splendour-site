import { paths } from '../config';

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
