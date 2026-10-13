"use client";

import { useState } from "react";
import { site } from "@/content/site";

const topics = ["Maintenance", "Access", "Common area", "Other"] as const;

export function ContactForm() {
  const [hint, setHint] = useState("");
  const emailReady = site.associationEmail.length > 0;

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!emailReady) {
      setHint("The association email is not published yet, so this form cannot open a mail draft.");
      return;
    }

    const data = new FormData(event.currentTarget);
    const topic = String(data.get("topic") || "Message");
    const name = String(data.get("name") || "");
    const flat = String(data.get("flat") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Paradise RWA: ${topic}`);
    const body = encodeURIComponent(`Name: ${name}\nFlat: ${flat}\n\n${message}`);
    window.location.href = `mailto:${site.associationEmail}?subject=${subject}&body=${body}`;
    setHint("Your mail app should open with this message. Nothing is stored on the website.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-forest">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            className="rounded-xl border border-line bg-white px-3 py-3 font-normal text-ink"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-forest">
          Flat
          <input
            name="flat"
            required
            placeholder="Tower and flat number"
            className="rounded-xl border border-line bg-white px-3 py-3 font-normal text-ink placeholder:text-moss/70"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-forest">
        Topic
        <select
          name="topic"
          required
          className="rounded-xl border border-line bg-white px-3 py-3 font-normal text-ink"
          defaultValue="Maintenance"
        >
          {topics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-forest">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-xl border border-line bg-white px-3 py-3 font-normal text-ink"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-fill disabled:cursor-not-allowed disabled:opacity-60" disabled={!emailReady}>
          {emailReady ? "Open mail draft" : "Email not published"}
        </button>
        <p className="text-sm text-moss">The form opens a mail draft. It does not store what you type.</p>
      </div>
      {hint ? (
        <p role="status" className="text-sm text-forest">
          {hint}
        </p>
      ) : null}
    </form>
  );
}
