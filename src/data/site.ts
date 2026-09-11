export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationGroup = {
  title: string;
  links: readonly NavigationItem[];
};

const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Projects", href: "/projects" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly NavigationItem[];

export const siteConfig = {
  name: "Kuber Roofing Solutions",
  shortName: "Kuber Roofing",
  description:
    "Roofing solutions for industrial, commercial, agricultural, and architectural applications.",
  quoteHref: "/contact#quote",
  primaryNavigation,
  footerNavigation: [
    {
      title: "Company",
      links: primaryNavigation.slice(0, 3),
    },
    {
      title: "Explore",
      links: primaryNavigation.slice(3),
    },
  ] satisfies readonly NavigationGroup[],
} as const;
