"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/content/site";

function normalize(path: string) {
  const trimmed = path.replace(/\/$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function Header() {
  const pathname = normalize(usePathname() || "/");
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="inline-flex shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-gold/70">
            <Logo priority alt="" className="h-11 w-11" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block font-serif text-lg leading-none text-forest">{site.name}</span>
            <span className="mt-1 block text-[11px] font-medium leading-snug tracking-wide text-moss sm:text-xs">
              <span className="text-gold" aria-hidden="true">
                |{" "}
              </span>
              {site.township}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold ${
                  active ? "text-forest underline decoration-gold decoration-2 underline-offset-8" : "text-moss hover:text-forest"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="shrink-0 rounded-full px-3 py-1.5 text-sm font-semibold text-forest ring-1 ring-forest md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-line px-5 py-3 md:hidden" aria-label="Primary">
          <ul className="flex flex-col">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="border-b border-line last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="flex items-center justify-between py-3 font-serif text-2xl text-forest"
                  >
                    {item.label}
                    <span className="text-xs font-sans font-semibold uppercase tracking-[0.16em] text-gold-deep">
                      {active ? "Here" : "Open"}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
