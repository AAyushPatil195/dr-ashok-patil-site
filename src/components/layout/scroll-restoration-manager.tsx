"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollRestorationManager() {
  const pathname = usePathname();

  useEffect(() => {
    const syncScrollRestoration = () => {
      const isUnanchoredContact =
        window.location.pathname === "/contact" && !window.location.hash;
      const hasEarlyContactEntry =
        document.documentElement.dataset.contactEntry === "true";

      if (isUnanchoredContact && hasEarlyContactEntry) {
        window.history.scrollRestoration = "manual";
        return;
      }

      window.history.scrollRestoration = "auto";

      if (window.location.pathname !== "/contact") {
        delete document.documentElement.dataset.contactEntry;
      }
    };

    syncScrollRestoration();
    window.addEventListener("hashchange", syncScrollRestoration);

    return () => {
      window.removeEventListener("hashchange", syncScrollRestoration);
    };
  }, [pathname]);

  return null;
}
