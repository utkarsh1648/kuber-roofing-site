import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 shadow-structural backdrop-blur-md">
      <div className="hidden bg-brand-deep text-white/75 md:block">
        <div className="site-container flex h-9 items-center justify-between font-technical text-[0.6875rem] font-medium tracking-wide">
          <span>{siteConfig.name}</span>
          <Link
            href={siteConfig.quoteHref}
            className="font-semibold text-white transition-colors hover:text-white/80"
          >
            Request a quotation
          </Link>
        </div>
      </div>

      <div className="site-container flex h-[4.5rem] items-center justify-between md:h-20">
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          <BrandMark />
        </Link>

        <nav aria-label="Primary navigation" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {siteConfig.primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-heading text-sm font-medium text-text-muted transition-colors hover:text-brand-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            href={siteConfig.quoteHref}
            size="sm"
            className="hidden sm:inline-flex"
          >
            Get a Quote
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>

          <details className="group relative xl:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-control border border-border text-brand-deep transition-colors hover:bg-surface-muted">
              <span className="sr-only">Open navigation menu</span>
              <Menu aria-hidden="true" className="size-5" />
            </summary>

            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(20rem,calc(100vw-2rem))] rounded-card border border-border bg-surface p-4 shadow-raised"
            >
              <ul className="flex flex-col">
                {siteConfig.primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-control px-3 py-3 font-heading text-sm font-medium text-text-muted transition-colors hover:bg-surface-muted hover:text-brand-blue"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button
                href={siteConfig.quoteHref}
                variant="accent"
                className="mt-3 w-full sm:hidden"
              >
                Get a Quote
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
