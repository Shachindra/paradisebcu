"use client";

import { useMemo, useState } from "react";
import type { Notice, NoticeCategory } from "@/content/site";
import { formatDate } from "@/lib/format";

const filters = ["All", "Maintenance", "Community", "Safety"] as const;

type Filter = (typeof filters)[number];

const categoryTone: Record<NoticeCategory, string> = {
  Maintenance: "text-forest",
  Community: "text-gold-deep",
  Safety: "text-clay",
};

export function NoticeBoard({ notices }: { notices: Notice[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = useMemo(
    () => (filter === "All" ? notices : notices.filter((notice) => notice.category === filter)),
    [filter, notices],
  );

  return (
    <div>
      <div role="group" aria-label="Filter notices" className="flex flex-wrap gap-2">
        {filters.map((item) => {
          const selected = item === filter;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                selected ? "bg-forest text-paper" : "bg-cream text-forest hover:bg-line"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-8 text-moss">No notices in this category.</p>
      ) : (
        <ol className="mt-8 divide-y divide-line border-y border-line">
          {visible.map((notice) => (
            <li key={notice.id} className="grid gap-3 py-6 sm:grid-cols-[9rem_1fr]">
              <div>
                <time dateTime={notice.date} className="block text-sm text-moss">
                  {formatDate(notice.date)}
                </time>
                <p className={`mt-1 text-xs font-semibold uppercase tracking-[0.16em] ${categoryTone[notice.category]}`}>
                  {notice.category}
                </p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-forest">{notice.title}</h2>
                {notice.sample ? (
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-clay">Sample</p>
                ) : null}
                <p className="mt-2 leading-relaxed text-moss">{notice.body}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
