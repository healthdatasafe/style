# Changelog

## [Unreleased]

### Changed

- **hds-style 0.5.1** (2026-11-14, plan 121): dark tokens and the dark AA fixes; a "Patient dark" switch
  (`palette-patient palette-dark`, teal); the install line pins a tag.

### Fixed

- **Dark: the typography sample was unreadable** (dark grey on the dark card): the two `prose` blocks get
  `dark:prose-invert`, which `.palette-dark` now triggers (hds-style 0.5.0).
- **`h1` in Inter Tight again**: `hds.css` set every heading to `--font-sans`, Inter since hds-style 0.4.0; `h1` now
  takes `--font-display`, as in hds-style. The sample says which cut is which.
- **hds-style 0.4.0** (2026-11-14, plan 121): patient palette v2, body text in Inter with Inter Tight for `h1` and
  display titles, and the colour roles set for the doctor palette too (heading updated).

### Added

- **Colour roles** (2026-11-13, plan 121): hds-style pinned to `#0.3.0`; a "Colour roles" row under the palette
  swatches (`--hds-text-body`, `-text-faint`, `-tint-border`, `-control-off`, `-warning`, `-warning-bg`, `-toast`,
  `-scrim`), with the fallback `tailwind-map.css` uses where a palette does not set a role yet.

### Fixed

- **The published site had no styles** (2026-11-13): `index.html` loads `./hds.css`, but the build only wrote
  `dist/hds.min.css`, so style.datasafe.dev served `hds.css` as a 404 (seen since the 2026-08-20 deploy). The build
  now writes both.

- **A deploy waits until the site serves it** (2026-11-08, B-2026-11-06-12): `scripts/deploy.sh` used to report success once
  the Pages branch was pushed, even when GitHub's own Pages deploy then failed and the previous build kept serving.
  It now runs `scripts/verify-pages.sh` (same helper as hds-webapp), which waits until the site's `version.json`
  names the commit just built, re-runs a failed `pages-build-deployment` run once, and fails (non-zero, with the
  run link) otherwise. `VERIFY_PAGES_TIMEOUT` (default 900 s).

### Added

- CI: GitHub Actions workflow (`.github/workflows/ci.yml`) running the build on pull requests and pushes to `main` (2026-10-08).
- The `copy` script creates `dist/` when it is missing, so the build works from a fresh clone; `package.json` version
  aligned with the CHANGELOG (0.0.2 → 0.3.0).

### Changed

- Repo formatted with prettier (`npm run format:fix`); CI now also runs `npm run format`. Layout only (whitespace,
  attribute and class order, the inline script's line breaks): the built `hds.min.css` is byte-identical and the
  page renders pixel-identical (2026-10-08).

## [0.3.0] - 2026-03-10

### Added

- Connection list sample in Components section
- Primary scale swatches display

### Changed

- Switched to white logo in dark mode (nav + sidebar)

### Fixed

- Pre/code text contrast in dark mode

## [0.2.0] - 2026-02-12

### Added

- Base HTML element styles to `hds.min.css`
- Deploy script for gh-pages publishing

### Changed

- Refactored to use hds-style npm package as foundation
- Loaded Google Fonts via HTML `<link>` tag instead of CSS `@import`
- Improved README with purpose, content description, and deployment section

## [0.1.0] - 2025-07-24

### Added

- Icons and logos in unified `images/` directory
- Settings icon
- CNAME file for custom domain
- Sidebar styles synced with doctor-dashboard
- Prettier plugin for attribute organization
- Font documentation (Inter)
- Publish/build scripts

### Changed

- Removed image variations for cleaner asset structure

## [0.0.1] - 2025-07-23

### Added

- Initial release
- HDS style showcase webapp
- Color palettes, typography, and component previews
- Images and logos for the HDS ecosystem
