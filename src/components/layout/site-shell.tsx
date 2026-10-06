import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/providers/motion-provider";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <MotionProvider>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </MotionProvider>
    </>
  );
}
