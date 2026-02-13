# Health Data Safe Style

Showcase site and asset repository for the HDS design system. Published at [style.datasafe.dev](https://style.datasafe.dev).

Contains:
- **Palettes showcase** — visual reference for `palette-doctor`, `palette-patient`, `palette-dark`
- **Icons and logos** — served from `https://style.datasafe.dev/images/`
- **Reference CSS** — `hds.css` / `hds.min.css`

### Technology Choices

- [Flowbite](https://flowbite.com/)
- [Inter](https://fonts.google.com/specimen/Inter)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind CSS Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography)

### Setup

Install with `./scripts/setup.sh` (which handles cloning of the `gh-pages` branch into `dist` for publishing) or `npm install`.

### Development

Run the development server:

```bash
npm run dev
```

Open `./src/index.html` with your browser to see the result.

### Deployment

The site is deployed to GitHub Pages via the `gh-pages` branch.

```bash
npm run build   # copies src to dist, minifies CSS
# then push the dist/ contents to the gh-pages branch
```
