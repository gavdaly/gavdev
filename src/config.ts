import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://gavdev.xyz/", // replace this with your deployed domain
  author: "Gavin Daly",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "GavDev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/gavdaly",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },

  {
    name: "Mail",
    href: "mailto:gav@gavdev.xyz",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/gavdev",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },

  {
    name: "Discord",
    href: "",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "Reddit",
    href: "",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Telegram",
    href: "",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://indiehackers.social/@gav",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
