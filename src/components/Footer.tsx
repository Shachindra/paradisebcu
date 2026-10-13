import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-gold-soft">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:grid-cols-[auto_1fr_auto] sm:items-start">
        <div className="flex items-center gap-3">
          <span className="inline-flex overflow-hidden rounded-full bg-white ring-1 ring-gold/70">
            <Logo alt="" className="h-14 w-14" />
          </span>
          <div>
            <p className="font-serif text-xl leading-tight text-white">
              {site.name}{" "}
              <span className="text-gold">|</span>{" "}
              <span className="text-base font-sans text-gold-soft">{site.township}</span>
            </p>
          </div>
        </div>

        <address className="text-sm not-italic leading-6 text-gold-soft/90">
          {site.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="mt-3 block">Paradise RERA {site.rera}</span>
        </address>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto w-full max-w-6xl px-5 py-4 text-center text-xs leading-5 text-gold-soft/70">
          A residents&apos; site for {site.brand}. The township is by Brigade Group.
        </p>
      </div>
    </footer>
  );
}
