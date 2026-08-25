import { defineAstroPaperConfig } from "./src/types/config";

const siteUrl = process.env.SITE_URL ?? "https://zymir-li.github.io";

export default defineAstroPaperConfig({
  site: {
    url: siteUrl,
    title: "Zymir's Blog",
    description:
      "Building software, learning broadly, and following interesting problems.",
    author: "Zymir",
    ogImage: "default-og.png",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: false,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/zymir-li",
      linkTitle: "GitHub",
    },
    { name: "mail", url: "mailto:amormz@foxmail.com", linkTitle: "Email Zymir" },
  ],
  shareLinks: [],
});
