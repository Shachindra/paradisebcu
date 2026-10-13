import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">404</p>
      <h1 className="mt-3 font-serif text-5xl text-forest">This page is not on the board.</h1>
      <p className="mt-4 max-w-xl text-lg text-moss">
        The address may be mistyped, or the page has not been published yet.
      </p>
      <Link href="/" className="btn-fill mt-8">
        Back to Paradise
      </Link>
    </div>
  );
}
