# DNA Engineering website

Company website for DNA Engineering Ltd (BMS controls engineering, Telford). Built with Astro, a static site with no backend. Hosted on IONOS Deploy Now at dna-engineering.co.uk.

## Where things live

- `src/config.ts` holds company details (name, number, phone, email) and the nav. Change details here only.
- `src/data.ts` holds the services, systems and sectors lists.
- `src/content/projects/*.md` has one case study per file. `draft: true` hides a file from the live site.
- `src/pages/` has one file per page.
- `src/layouts/Base.astro` is the header, footer and page shell.
- `src/styles/global.css` holds the brand colours and shared styles.
- `public/images/` holds photos and the logo.

## Writing rules

- British English. Plain, specific and technical. Two audiences: commercial building owners, facilities managers and M&E contractors (the main business), and owners of larger homes for domestic automation (secondary).
- Brand: "DnA Engineering". Dark theme, teal (`--com`) for commercial, green (`--dom`) for domestic, Sora headings, Instrument Sans body. Tokens live in `src/styles/global.css`.
- Name real systems, sectors and places. No generic marketing filler ("solutions", "seamless", "cutting-edge").
- Never invent statistics, client names, project numbers or team size. If a fact isn't confirmed, mark it `TODO(Dan)`.
- Name a client or main contractor only once Dan confirms permission.

## Working rules

- Every change goes through a branch and a pull request. Never push straight to `main`, because `main` deploys live.
- Run `npm run build` before opening a PR. It must pass.
- Keep it dependency-light. Don't add frameworks or UI libraries without asking.
- Images go in `public/images/`, under 300 KB each, resized to 1600px wide at most.
