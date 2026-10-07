"use client";

import { useState } from "react";

const counterUrl =
  "https://api.visitorbadge.io/api/visitors?path=travelwithnaresh.com%2Fsite-views&label=SITE%20VIEWS&countColor=%23087e8b";

export function SiteVisitCounter() {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <div className="site-visit-counter" aria-live="polite">
      {unavailable ? (
        <span>Site view count temporarily unavailable</span>
      ) : (
        // The remote SVG changes on every request, so it must bypass Next.js image optimization.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={counterUrl}
          alt="Total site views"
          width="130"
          height="28"
          referrerPolicy="no-referrer"
          onError={() => setUnavailable(true)}
        />
      )}
    </div>
  );
}
