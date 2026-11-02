import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <p className="hero__eyebrow" data-intro>
        TOPOLOGICAL DISCONTINUITY
      </p>
      <h1 className="not-found__code" data-intro>
        404
      </h1>
      <p className="not-found__msg" data-intro>
        The requested coordinate does not exist within the active parameter manifold.
      </p>
      <Link
        href="/"
        className="cta-button"
        data-magnetic="0.25"
        data-cursor="Return"
      >
        <span className="cta-button__text">← Return to Home</span>
      </Link>
    </div>
  );
}
