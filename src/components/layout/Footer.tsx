import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "@/components/ui/BrandMark";
import { siteConfig } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep text-white/75">
      <div className="site-container py-12 lg:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_1fr_1fr] lg:gap-16">
          <div className="max-w-md">
            <Link href="/" aria-label={`${siteConfig.name} home`}>
              <BrandMark inverse />
            </Link>
            <p className="mt-5 text-sm leading-6 text-white/70">
              {siteConfig.description}
            </p>
          </div>

          {siteConfig.footerNavigation.map((group) => (
            <div key={group.title}>
              <h2 className="font-heading text-base font-semibold text-white">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white"
                    >
                      {item.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-3.5 opacity-60"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-6 font-technical text-[0.6875rem] tracking-wide text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>Business contact details pending confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
