# dna-website

Website for DNA Engineering Ltd, built with [Astro](https://astro.build).

## Editing without code

The quickest edits are made in the GitHub web editor (press `.` on the repo page, or click the pencil on any file):

| To change | Edit |
|---|---|
| Phone, email, company number | `src/config.ts` |
| Services, systems, sectors | `src/data.ts` |
| Add a project | copy `src/content/projects/example-care-home.md`, fill it in, set `draft: false` |
| Page wording | `src/pages/<page>.astro` |

Commit to a new branch and open a pull request. The other person reviews it, and merging it publishes the change.

## Running locally

```
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Content still needed

See [CONTENT-NEEDED.md](CONTENT-NEEDED.md).
