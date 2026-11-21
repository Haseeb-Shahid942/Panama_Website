import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

// No secrets here. SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and
// NEXT_PUBLIC_FACEBOOK_PIXEL_ID must be set in the hosting Secrets / .env.

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

// `next dev` writes to .next-dev so it can never erase the production build in .next
export default (phase) => ({
  ...nextConfig,
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
});
