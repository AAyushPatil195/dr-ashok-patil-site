import Link from "next/link";
import { Clock3, MapPin, MessageSquareText } from "lucide-react";
import { clinicConfig } from "@/config/clinic";

const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Clinic", href: "/#clinic" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Visit", href: "/contact" },
] as const;

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden border-t border-dark-border bg-text text-surface"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-36 size-80 rounded-full bg-primary/25 blur-3xl"
      />
      <div className="site-container relative py-10 sm:py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-dark-border pb-8 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_1.05fr_0.9fr] lg:gap-8">
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/#home"
              className="inline-flex items-center gap-3 rounded-control focus-visible:outline-offset-4"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-[0.9rem] bg-primary text-xs font-extrabold tracking-[0.08em] text-surface shadow-soft">
                AP
              </span>
              <span>
                <span className="block text-base font-extrabold tracking-[-0.025em]">
                  Dr. Ashok A. Patil
                </span>
                <span className="mt-1 block text-xs font-semibold text-surface/65">
                  B.A.M.S. · General Practitioner
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-surface/68">
              Long-standing family practice providing practical, patient-first
              general healthcare in Jalgaon.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-extrabold tracking-[0.12em] text-accent uppercase">
              Navigate
            </h2>
            <ul className="mt-3 grid list-none gap-y-2.5 p-0 text-sm font-semibold text-surface/72">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link className="transition-colors hover:text-surface" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 row-start-3 sm:col-span-1 sm:row-auto">
            <h2 className="text-xs font-extrabold tracking-[0.12em] text-accent uppercase">
              Visit
            </h2>
            <address className="mt-3 flex gap-2.5 text-sm leading-6 text-surface/72 not-italic">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
              <span>
                {clinicConfig.addressLines[0]}
                <br />
                {clinicConfig.addressLines[1]}
              </span>
            </address>
            <div className="mt-3 flex gap-2.5 text-sm leading-6 text-surface/72">
              <Clock3 aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
              <p>
                {clinicConfig.morningHours}
                <br />
                {clinicConfig.eveningHours}
                <span className="mt-1 block text-xs text-surface/55">
                  {clinicConfig.sundayNote}
                </span>
              </p>
            </div>
          </div>

          <div className="col-start-2 row-start-2 sm:col-start-auto sm:row-auto">
            <h2 className="text-xs font-extrabold tracking-[0.12em] text-accent uppercase">
              Enquiries
            </h2>
            <p className="mt-3 text-sm leading-6 text-surface/68">
              Send an appointment or general enquiry through the secure website form.
            </p>
            <Link
              href="/#enquiry"
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-control bg-surface px-4 text-sm font-extrabold text-primary-dark shadow-standard transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-soft-accent active:translate-y-0"
            >
              <MessageSquareText aria-hidden="true" className="size-4 text-primary" />
              Send enquiry
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs leading-5 text-surface/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dr. Ashok A. Patil. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Policy information">
            <span>Privacy policy pending</span>
            <span>Medical disclaimer pending</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
