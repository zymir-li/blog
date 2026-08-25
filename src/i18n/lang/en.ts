import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Post",
    tags: "Topics",
    about: "About",
    archives: "Archives",
    search: "Search",
  },
  post: {
    publishedAt: "Published",
    updatedAt: "Updated",
    sharePostIntro: "Share this post:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "Topics",
    backToTop: "Back to top",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous post",
    nextPost: "Next post",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    socialLinks: "Elsewhere",
    featured: "Featured writing",
    recentPosts: "Recent writing",
    allPosts: "View all writing",
  },
  footer: {
    copyright: "Zymir's Blog",
    allRightsReserved: "Write continuously. Grow slowly.",
  },
  pages: {
    tagTitle: "Topic",
    tagDesc: "All writing filed under",

    tagsTitle: "Topics",
    tagsDesc: "Browse writing by subject.",

    postsTitle: "Post",
    postsDesc: "",

    archivesTitle: "Archives",
    archivesDesc: "Browse every piece by date.",

    searchTitle: "Search",
    searchDesc: "Find an idea, a phrase, or a question.",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search writing...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
  },
  notFound: {
    title: "404 Not Found",
    message: "This page does not exist.",
    goHome: "Return home",
  },
} satisfies UIStrings;
