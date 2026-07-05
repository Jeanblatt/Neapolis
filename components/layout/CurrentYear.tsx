"use client";

import { useEffect, useState } from "react";

/**
 * Most pages are statically prerendered at build time, so a plain
 * `new Date().getFullYear()` in a server component would freeze on the
 * build year until the next deploy. Rendering it client-side keeps it correct.
 */
export default function CurrentYear() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    // Syncing with the system clock (an external source), not deriving from props/state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  return <span suppressHydrationWarning>{year ?? new Date().getFullYear()}</span>;
}
