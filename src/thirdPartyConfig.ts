import discord from "@assets/footer_discord.svg";
import facebook from "@assets/footer_facebook.svg";
import twitter from "@assets/footer_twitter.svg";
import gDrive from "@assets/logo_googledrive.svg?url";
import mediaFire from "@assets/logo_mediafire.svg?url";

import { formatLinkList, type NameLinkTuple } from "./util";
export const TWITTER_HANDLE = "@SplendourTeam";
const MAILCHIMP_USER = "d68145bb4360d40f488bd3c5e";
const MAILCHIMP_ID = "263c850834";

export const mailchimpForm = {
  action:
    `https://imperialsplendour.us19.list-manage.com/subscribe/post?u=${MAILCHIMP_USER}&id=${MAILCHIMP_ID}`,
  inputName: `b_${MAILCHIMP_USER}_${MAILCHIMP_ID}`,
};

export const buildCreditsCopyright = (builders: NameLinkTuple[]) =>
  `© ${new Date().getFullYear()}, ${formatLinkList(builders)}`;

export const hostImages: Record<string, string> = {
  "ModDB": "https://button.moddb.com/download/medium/236128.png",
  "MediaFire": mediaFire,
  "Google Drive": gDrive,
};

export const socialMediaImages: Record<string, string> = {
  ModDB: "https://button.moddb.com/popularity/medium/mods/20800.png",
  Facebook: facebook.src,
  Twitter: twitter.src,
  Discord: discord.src,
};
