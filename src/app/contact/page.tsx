import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to the Paradise association at Brigade Cornerstone Utopia.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-12 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div>
        <PageHeader
          kicker="Contact"
          title="Write to Paradise."
          lede="Use this for association business: maintenance, access, and the common areas. For a fire or a medical emergency, call the numbers on the directory."
        />
        <dl className="mt-8 divide-y divide-line border-y border-line">
          <div className="grid gap-1 py-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">Email</dt>
            <dd className="text-lg text-forest">
              {site.associationEmail ? (
                <a href={`mailto:${site.associationEmail}`} className="underline decoration-gold underline-offset-4">
                  {site.associationEmail}
                </a>
              ) : (
                <span className="text-moss italic">Not published</span>
              )}
            </dd>
          </div>
          <div className="grid gap-1 py-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">Phone</dt>
            <dd className="text-lg text-forest">
              {site.associationPhone ? (
                <a href={`tel:${site.associationPhone}`} className="underline decoration-gold underline-offset-4">
                  {site.associationPhone}
                </a>
              ) : (
                <span className="text-moss italic">Not published</span>
              )}
            </dd>
          </div>
          <div className="grid gap-1 py-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">Hours</dt>
            <dd className="text-lg text-ink">{site.officeHours}</dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </article>
  );
}
