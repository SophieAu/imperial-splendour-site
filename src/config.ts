export const FALLBACK_IMAGE = "/socialImage.png";
export const BASE_URL = "https://imperialsplendour.com";

export const pageTitle = (title: string) => `${title} | Imperial Splendour`;

export const slugs = {
  home: "",
  downloadIndex: "download",
  blog: "blog",
  about: "about",
  termsOfService: "terms-of-service",
  factions: "factions",
  notFound: "404",
};

export const paths = {
  home: "/",
  downloadIndex: `/${slugs.downloadIndex}`,
  blog: `/${slugs.blog}`,
  about: `/${slugs.about}`,
  termsOfService: `/${slugs.termsOfService}`,
  factions: `/${slugs.factions}`,
  notFound: `/${slugs.notFound}`,
};
