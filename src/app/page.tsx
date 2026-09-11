import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <div className="section-space">
      <div className="site-container">
        <div className="max-w-2xl rounded-showcase border border-border bg-surface p-6 shadow-structural sm:p-8">
          <p className="technical-label mb-3 text-brand-green">
            Frontend foundation
          </p>
          <h1 className="font-heading text-3xl font-bold tracking-[-0.025em] text-brand-deep sm:text-4xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-text-muted">
            The shared visual system, navigation, and site footer are ready. The
            approved homepage sections will be implemented next.
          </p>
          <Button className="mt-6" href={siteConfig.quoteHref}>
            Request a quote
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
