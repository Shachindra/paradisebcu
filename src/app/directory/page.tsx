import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { emergencyContacts, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Directory",
  description: "Emergency numbers and association contacts for Paradise, Varthur.",
};

export default function DirectoryPage() {
  const association = [
    {
      label: "Email",
      value: site.associationEmail || "Not published",
      href: site.associationEmail ? `mailto:${site.associationEmail}` : undefined,
    },
    {
      label: "Phone",
      value: site.associationPhone || "Not published",
      href: site.associationPhone ? `tel:${site.associationPhone.replace(/\s/g, "")}` : undefined,
    },
    { label: "Office hours", value: site.officeHours, href: undefined },
    { label: "Security desk", value: "Not published", href: undefined },
    { label: "Maintenance desk", value: "Not published", href: undefined },
  ];

  return (
    <article className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
      <PageHeader
        kicker="Directory"
        title="Numbers worth keeping."
        lede="National emergency lines are listed as published for India. Campus desks stay blank until the association confirms them."
      />

      <section id="emergency" className="mt-12 scroll-mt-24">
        <h2 className="font-serif text-3xl text-forest">Emergency</h2>
        <p className="mt-3 max-w-2xl text-moss">
          For a fire, a medical emergency, or a crime, use these lines. When the security desk
          number is published, call the gate first for something inside the campus that is not an
          emergency.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {emergencyContacts.map((contact) => (
            <li key={contact.number} className="rounded-2xl border border-line bg-cream px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">{contact.label}</p>
              <a href={`tel:${contact.number}`} className="mt-2 block font-serif text-4xl text-forest">
                {contact.number}
              </a>
              <p className="mt-1 text-sm text-moss">{contact.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="font-serif text-3xl text-forest">Wing association</h2>
        <p className="mt-3 text-moss">
          A blank row is not a working number. Names of office bearers are left off this page until
          the association publishes them.
        </p>
        <dl className="mt-6 divide-y divide-line border-y border-line">
          {association.map((row) => (
            <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr]">
              <dt className="font-semibold text-forest">{row.label}</dt>
              <dd>
                {row.href && row.value !== "Not published" ? (
                  <a href={row.href} className="underline decoration-gold underline-offset-4">
                    {row.value}
                  </a>
                ) : (
                  <span className={row.value === "Not published" ? "text-moss italic" : "text-ink"}>
                    {row.value}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="font-serif text-3xl text-forest">Finding the campus</h2>
        <p className="mt-3 leading-relaxed text-moss">{site.addressLines.join(", ")}.</p>
        <p className="mt-3 leading-relaxed text-moss">
          Varthur Lake, the Whitefield IT corridor, and the Outer Ring Road are the usual landmarks.
          Use a map for the route from where you are.
        </p>
        <p className="mt-4">
          <a
            href={site.mapUrl}
            className="font-semibold text-forest underline decoration-gold underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </p>
      </section>
    </article>
  );
}
