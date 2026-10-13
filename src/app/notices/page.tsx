import type { Metadata } from "next";
import { NoticeBoard } from "@/components/NoticeBoard";
import { PageHeader } from "@/components/PageHeader";
import { notices } from "@/content/site";

export const metadata: Metadata = {
  title: "Notices",
  description: "Notice board for Paradise at Brigade Cornerstone Utopia.",
};

export default function NoticesPage() {
  const samplesOnly = notices.every((notice) => notice.sample);

  return (
    <article className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
      <PageHeader
        kicker="Notice board"
        title="What Paradise has posted."
        lede="Maintenance windows, meetings, and safety notes for Paradise. Filter the board by the kind of notice."
      />

      {samplesOnly ? (
        <p className="mt-8 max-w-3xl border-l-2 border-clay bg-cream px-4 py-3 text-sm leading-relaxed text-moss">
          Every notice on this board is a sample. None of them is a circular from the
          association. Replace the samples before you rely on this page.
        </p>
      ) : null}

      <div className="mt-10 max-w-3xl">
        <NoticeBoard notices={notices} />
      </div>
    </article>
  );
}
