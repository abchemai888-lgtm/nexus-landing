# NEXUS Cloudflare Worker + D1

Architecture:

React/Vite -> Cloudflare Worker -> D1 (`nexus-db`)

Worker routes:
- POST /api/leads
- POST /api/coupon
- all other requests -> Static Assets in `dist`

Cloudflare configuration is in `wrangler.toml`.
