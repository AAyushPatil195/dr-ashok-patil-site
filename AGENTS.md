<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Dr. Ashok A. Patil website

## Current phase

- This repository is the production website for Dr. Ashok A. Patil.
- The engineering foundation is approved and UI development is proceeding in explicitly approved slices.
- The global Header/Navbar and Home Hero are approved and must not be materially redesigned.
- The current authorized slice contains only these next Home sections: Quick Clinic Information, Treatments & Services Preview, and Trust / Why Patients Choose Him. Stop after these sections; do not build later Home sections or additional pages until the owner explicitly approves the next slice.
- Do not invent missing medical, achievement, camp, contact, or integration details. Mark them as pending or ask when they become necessary.

## Practitioner facts and safe wording

- Name: Dr. Ashok A. Patil.
- Qualification: B.A.M.S.
- Role: General Practitioner.
- Location: Shani Peth, Jalgaon, Maharashtra.
- Experience: approximately 28 years.
- Clinic address: B1/1019, Shani Peth, Kinara, Jalgaon, Maharashtra 425001.
- Nearby landmark: Phule/Fule Market and the main vegetable market area.
- Timings: 10:00 AM-2:30 PM and 6:00 PM-10:30 PM. Sunday morning is closed.
- Core position: deep local trust, experienced diagnosis, and modern clinic standards. The practice is long-established and serves families across generations.
- Reputation may be described factually as patient-first, trusted, practical, experienced with difficult general cases, and willing to make appropriate specialist referrals.
- Never describe the doctor as MBBS, MD, dermatologist, pediatrician, or skin specialist unless the owner later supplies verified credentials.
- Safe treatment language includes general medical care; fever and infections; respiratory and digestive problems; hypertension and diabetes/chronic care; common skin conditions; common childhood illnesses; elderly care; wounds, dressings, suturing/stitches; nebulisation; injections; IV/saline; minor procedures; and appropriate specialist referrals.
- Avoid guarantees, superlatives, unsupported outcomes, and language that implies specialist credentials.

## Clinic facts

- Spacious waiting area, dedicated consultation cabin, AC in the consultation cabin only, dedicated IV/saline room, hygiene-focused interiors, and three clinic staff.
- A medical store is in the same building but is not operated by the clinic. Never imply ownership or affiliation beyond co-location.
- Periodic Monday community/child-health camps exist, but exact details are pending.
- Use placeholder/mock contact details until the owner explicitly supplies and approves real details. Never commit personal contact data or secrets casually.

## Information architecture

Planned routes:

1. Home
2. About Dr. Ashok Patil
3. Treatments & Services
4. Clinic
5. Achievements & Recognition
6. Contact / Visit

Achievements may cover professional leadership, community service, awards, certificates, official events, healthcare initiatives, and recognition. Present political/public figures neutrally; proximity to a public figure is never a medical qualification.

## Product and design rules

- Mobile-first is mandatory because roughly 90% of traffic is expected from phones. Also design and test deliberately for tablets, laptops, desktops, and large screens; do not merely stretch the mobile layout.
- Tone: modern, premium, trustworthy, warm, calm, personal, polished, and medically credible.
- Avoid generic hospital templates, corporate healthcare SaaS styling, beige-heavy designs, excessive minimalism, wellness/Ayurvedic clichés, gimmicks, and flashy effects.
- Use layered layouts, varied but coherent sections, tasteful depth, subtle borders and shadows, strong spacing, real doctor/clinic photography, and one intentional dark contrast section on the eventual Home page.
- If an AP monogram is used, keep it small and supporting. It must never become a dominant decorative element.
- All components must consume centralized semantic tokens. The seven source colors live only in `src/styles/design-tokens.css`:
  - background `#F7FAF9`
  - surface `#FFFFFF`
  - primary `#155E63`
  - primary dark `#123F45`
  - accent `#C86B42`
  - soft accent `#E6F1EE`
  - text `#19343B`
- Derived color, border, shadow, overlay, radius, spacing, and typography tokens should also be centralized rather than scattered through components.

## Interaction and accessibility

- Motion must stay subtle, professional, and inexpensive to render. Respect `prefers-reduced-motion` everywhere.
- Intended interaction language: 450-550ms section reveals with 12-18px movement, light card staggering, gentle image fade/scale, modest desktop hover lift, and subtle mobile press feedback.
- The future navbar compresses after roughly 40-60px of scroll with backdrop blur and a subtle shadow. The future mobile menu is a polished animated sheet, not a basic dropdown.
- The future sticky mobile actions appear only after the hero CTA leaves view and contain Call, Enquiry, and Directions; adjust or hide them near the footer.
- Every interactive element must cover keyboard, touch, focus-visible, hover, active, and disabled behavior as applicable.
- Maintain semantic HTML, logical heading order, labels, usable focus order, sufficient contrast, 44px touch targets where practical, and 200% text zoom support.

## Engineering rules

- Stack: Next.js App Router, TypeScript, Tailwind CSS, Motion, Lucide React, Zod, Resend, and Next/Image. Add optional libraries only when the feature that needs them is implemented.
- Deployment target: Netlify. Do not add Express, a database, or authentication.
- Prefer server components. Add client components only around actual interactive behavior.
- Keep architecture clear and proportionate: reusable components, centralized configuration, accessible markup, optimized images, minimal dependencies, and no layout shifts.
- Use Next.js server/serverless functionality for the future enquiry form. Keep all secrets in environment variables and never commit them.
- SEO must remain natural and local: Dr Ashok Patil Jalgaon, general practitioner/family doctor in Jalgaon, doctor in Shani Peth, and doctor near Phule Market. Avoid keyword stuffing and thin pages.
- Preserve metadata, canonical support, sitemap, robots controls, performance, and accessibility. Structured medical/business data is deferred until final verified content exists.
- Keep indexing disabled until real content, the canonical production URL, and launch approval are all present.
- Before changing Next.js APIs, consult the matching versioned guide under `node_modules/next/dist/docs/` as required by the generated rule above.

## Source control

- GitHub remote: `https://github.com/AAyushPatil1195/dr-ashok-patil-site.git`.
- Do not run Git commands or perform any Git action, including status, diff, add, commit, branch, checkout, pull, push, merge, rebase, reset, tag, or remote changes, unless the owner explicitly requests that specific Git work.
- Make code and content changes only until the owner explicitly authorizes Git work.
- Never overwrite remote history without explicit approval.
- Never commit `.env` files, credentials, real personal phone numbers, build output, caches, or editor/OS junk.
