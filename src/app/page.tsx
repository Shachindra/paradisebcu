import Image from "next/image";
import Link from "next/link";
import lockup from "@/assets/paradise-rwa.png";
import { facts, homes, notices, site } from "@/content/site";
import { formatDate } from "@/lib/format";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  name: site.brand,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Brigade Cornerstone Utopia, Whitefield–Sarjapur Road",
    addressLocality: "Varthur, Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560087",
    addressCountry: "IN",
  },
  containedInPlace: {
    "@type": "ApartmentComplex",
    name: site.township,
  },
  email: site.associationEmail,
};

export default function HomePage() {
  const latest = notices.slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="px-4 pt-6 sm:px-5">
        <section className="relative mx-auto grid w-full max-w-6xl items-center gap-8 overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_78%_18%,#1e6a46_0%,#0f3d30_46%,#08261e_100%)] px-6 py-10 text-gold-soft shadow-[inset_0_0_0_1px_rgba(196,161,91,0.45)] sm:px-12 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-14">
          <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft sm:tracking-[0.22em]">
              <span className="block">Residents&apos; Welfare Association</span>
              <span className="mt-1 block">{site.place}</span>
            </p>
            <h1 className="mt-5 font-serif text-6xl leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl">
              {site.name}
            </h1>
            <p className="mt-4 flex items-center gap-3 text-lg text-gold-soft sm:text-2xl">
              <span className="font-serif text-3xl leading-none text-gold sm:text-4xl" aria-hidden="true">
                |
              </span>
              <span className="font-serif tracking-wide">{site.township}</span>
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-gold-soft/90 sm:text-lg">
              Studios and two-bedroom homes in Varthur, with notices, amenities, and the numbers for
              the block.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/notices" className="btn-fill-light">
                Read notices
              </Link>
              <Link href="/directory" className="btn-line">
                Emergency numbers
              </Link>
            </div>
          </div>
          <div className="relative order-1 mx-auto w-full max-w-md rounded-[1.75rem] bg-white p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] ring-4 ring-gold/80 lg:order-2">
            <Image
              src={lockup}
              alt="Paradise RWA logo, with three towers and a leaf above the words Paradise and RWA"
              priority
              className="h-auto w-full"
            />
          </div>
        </section>
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 py-10" aria-label="Paradise at a glance">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <li
              key={fact.label}
              className={`border-t border-line py-5 lg:border-t-0 lg:px-5 ${index === 0 ? "" : "lg:border-l"}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">{fact.label}</p>
              <p className="mt-2 font-serif text-2xl text-forest">{fact.value}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-3xl text-forest">Latest on the board</h2>
            <Link href="/notices" className="text-sm font-semibold text-forest underline decoration-gold underline-offset-4">
              All notices
            </Link>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-moss">
            The entries below are examples, so the board has a shape. They are not circulars from the
            association.
          </p>
          <ol className="mt-6 divide-y divide-line border-y border-line">
            {latest.map((notice) => (
              <li key={notice.id} className="grid gap-1 py-5 sm:grid-cols-[8.5rem_1fr]">
                <time dateTime={notice.date} className="text-sm text-moss">
                  {formatDate(notice.date)}
                </time>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                    Sample · {notice.category}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-forest">{notice.title}</h3>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="font-serif text-3xl text-forest">Start here</h2>
          <ol className="mt-6 border-t border-line">
            {[
              { href: "/notices", title: "Notice board", text: "Maintenance, meetings, and safety notes." },
              { href: "/directory", title: "Directory", text: "National emergency lines, and campus numbers once published." },
              { href: "/amenities", title: "Amenities", text: "What the township publishes for residents to use." },
              { href: "/about", title: "The block", text: "Where Paradise sits, and the homes beside the gardens." },
            ].map((item, index) => (
              <li key={item.href} className="border-b border-line">
                <Link href={item.href} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 hover:bg-cream">
                  <span className="font-serif text-gold-deep">0{index + 1}</span>
                  <span>
                    <span className="block font-semibold text-forest">{item.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-moss">{item.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto w-full max-w-6xl px-5 py-14">
          <h2 className="font-serif text-3xl text-forest">Homes in the block</h2>
          <p className="mt-3 max-w-2xl text-moss">
            Areas Brigade published for Paradise. Your sale deed is the record for your own flat.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {homes.map((home) => (
              <li key={home.name} className="grid gap-2 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
                <h3 className="font-serif text-2xl text-forest">{home.name}</h3>
                <div>
                  <p className="text-lg text-ink">{home.area}</p>
                  <p className="text-sm text-moss">{home.metric}</p>
                  <p className="mt-2 text-moss">{home.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
