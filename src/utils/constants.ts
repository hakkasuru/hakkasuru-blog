export const SITE = {
  title: "Anders Soh",
  description:
    "Engineering, CTF writeups, and travel — personal blog of Anders Soh.",
  url: "https://hakkasuru.me",
  author: "Anders Soh",
  ogImage: "/og-default.png",
} as const;

export const SOCIAL = {
  github: "https://github.com/anderssoh",
  gitlab: "https://gitlab.com/anderssoh",
  linkedin: "https://linkedin.com/in/anderssoh",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Articles", href: "/articles" },
  { label: "Travel", href: "/travel" },
  { label: "About", href: "/about" },
] as const;
