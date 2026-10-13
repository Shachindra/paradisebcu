import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { amenityGroups } from "@/content/site";

export const metadata: Metadata = {
  title: "Amenities",
  description: "Shared facilities published for Brigade Cornerstone Utopia, for residents of Paradise.",
};

export default function AmenitiesPage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
      <PageHeader
        kicker="Township"
        title="Shared life of the campus."
        lede="Facilities Brigade has published for Cornerstone Utopia. They are shared across the township. What is open, or bookable, can change after handover."
      />

      <p className="mt-8 max-w-3xl border-l-2 border-gold pl-4 text-sm leading-relaxed text-moss">
        This is a residents&apos; guide, not a claim that every item sits inside Paradise. The
        association should correct this page when the handover list for the block is settled.
      </p>

      <div className="mt-12 grid gap-12">
        {amenityGroups.map((group) => (
          <section key={group.title}>
            <h2 className="font-serif text-3xl text-forest">{group.title}</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {group.items.map((item) => (
                <li key={item.name} className="grid gap-1 py-4 sm:grid-cols-[16rem_1fr] sm:gap-8">
                  <h3 className="font-semibold text-forest">{item.name}</h3>
                  <p className="text-moss">{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
