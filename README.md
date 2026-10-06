# Dr. Ashok A. Patil

Production website for Dr. Ashok A. Patil, General Practitioner in Shani Peth, Jalgaon, Maharashtra.

The repository currently contains the engineering and design-system foundation only. Page design and production content will be added after foundation approval.

## Requirements

- Node.js 20.9 or newer
- npm 10.8.2 (recorded in `package.json`)

## Local development

```bash
npm install
npm run dev
```

The local site is available at `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

## Environment

Copy `.env.example` to `.env.local` when environment-specific configuration is needed.

- `NEXT_PUBLIC_SITE_URL` must be the final absolute canonical origin, without a trailing slash.
- `NEXT_PUBLIC_SITE_INDEXING_ENABLED` must remain `false` until real content and the canonical URL have been approved for launch.

Do not commit `.env.local` or any other file containing secrets or personal contact details.

## Deployment

The deployment target is Netlify. No adapter is required for a standard supported Next.js deployment. Configure the same Node version and environment variables in Netlify before launch.
