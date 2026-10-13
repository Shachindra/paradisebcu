import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { blocks, homes, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Paradise is a residential block of Brigade Cornerstone Utopia in Varthur, Bengaluru.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
      <PageHeader
        kicker="Paradise"
        title="Paradise, inside the township."
        lede="A residents' page for the Paradise block: where it sits, which homes were planned here, and what this site is for."
      />

      <div className="mt-10 grid max-w-3xl gap-5 text-lg leading-relaxed text-moss">
        <p>
          Paradise is a residential block at {site.township}. The township is on Whitefield–Sarjapur
          Road at Varthur, in east Bengaluru, on about 47 acres. Brigade planned it as a mixed-use
          campus of homes, shops, offices, and a multiplex.
        </p>
        <p>
          Five residential blocks make up the housing: {blocks.slice(0, -1).join(", ")}, and{" "}
          {blocks[blocks.length - 1]}. Paradise is the block beside the retail and commercial edge,
          with studios and two-bedroom homes.
        </p>
        <p>
          This site is kept for people who live here. It holds the notice board, a guide to shared
          amenities, and the numbers residents ask for. It is separate from the builder&apos;s sales
          pages.
        </p>
      </div>

      <section className="mt-14">
        <h2 className="font-serif text-3xl text-forest">Published home sizes</h2>
        <p className="mt-3 max-w-2xl text-moss">
          These are the figures Brigade published for Paradise. Treat them as the builder&apos;s
          super built-up areas, and check your sale deed for the area of your flat.
        </p>
        <ul className="mt-6 max-w-3xl divide-y divide-line border-y border-line">
          {homes.map((home) => (
            <li key={home.name} className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr]">
              <h3 className="font-serif text-2xl text-forest">{home.name}</h3>
              <div>
                <p className="text-ink">{home.area}</p>
                <p className="text-sm text-moss">{home.metric}</p>
                <p className="mt-1 text-moss">{home.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="font-serif text-3xl text-forest">On the map</h2>
        <p className="mt-3 leading-relaxed text-moss">
          {site.addressLines.join(", ")}. Varthur Lake, Whitefield, and the Outer Ring Road are the
          landmarks residents use. A driving time depends on the hour.
        </p>
        <p className="mt-4">
          <a href={site.mapUrl} className="font-semibold text-forest underline decoration-gold underline-offset-4">
            Open the campus in Google Maps
          </a>
        </p>
        <p className="mt-6 text-sm text-moss">Paradise RERA number {site.rera}.</p>
      </section>
    </article>
  );
}
