import { PanelsTopLeft } from "lucide-react";

import { siteConfig } from "@/data/site";

type BrandMarkProps = {
  inverse?: boolean;
};

export function BrandMark({ inverse = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="flex size-10 shrink-0 items-center justify-center rounded-control bg-brand-green text-white shadow-structural"
      >
        <PanelsTopLeft className="size-5" strokeWidth={2} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading text-lg font-bold tracking-[-0.02em] ${
            inverse ? "text-white" : "text-brand-deep"
          }`}
        >
          Kuber
        </span>
        <span
          className={`mt-1 font-technical text-[0.6rem] font-semibold uppercase tracking-[0.13em] ${
            inverse ? "text-white/70" : "text-text-muted"
          }`}
        >
          Roofing Solutions
        </span>
      </span>
      <span className="sr-only">{siteConfig.name}</span>
    </span>
  );
}
