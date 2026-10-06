# Driveway Gates Kent redesign

Redesign developed on `codex/high-end-redesign`.

## Design

Black, cobalt blue and paper white, with oversized Barlow Condensed lettering and Manrope body text. The homepage uses a full-width typographic masthead, panoramic gate photograph, contrasting enquiry panel, keyboard-accessible gate gallery, a three-step quote section, local coverage, an installation checklist, expandable pricing and accessible FAQs.

Original repository business copy, pricing data, gate imagery, logo shape, route structure, metadata and enquiry endpoint are retained. The service directory and six service pages, county directory and all town pages, guide library and article pages, and privacy page now use dedicated layouts in the approved style. Service and town heroes pair unobscured photography with labelled quote forms. Service details use pricing disclosures and compact related links; towns use wide editorial sections; the guide library retains category filtering and search, with sticky contents navigation in articles.

## Run locally

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3100
```

For the tested production build:

```sh
npm run build
npm run start -- --hostname 127.0.0.1 --port 3100
```

## Validation

- Production build passed, including all 64 generated pages and TypeScript validation.
- Desktop and mobile visual checks, including a 320px viewport.
- Checked mobile navigation, pricing disclosures, FAQ expansion, required quote fields, Escape dismissal and gallery selection with mouse and keyboard.
- Existing live enquiry endpoint retained; no test lead was sent to the business.
- `git diff --check` passed.

## Dependency note

Installing the existing dependency ranges reported nine advisories (two moderate, six high, one critical). A framework/dependency upgrade was not included in this visual redesign; review those advisories before a public release.

Fonts are served locally from `public/fonts`, with their SIL Open Font License files included.


## Subpage checks

- Production build and TypeScript checks pass for every generated route.
- Desktop review of services, service detail, district directory, town content, guide library, article content, and privacy layouts.
- All seven templates checked at a 320px viewport without horizontal overflow.
- Verified guide category/search/clear controls, article contents links, pricing disclosures, quote modal entry, and native required-field validation without sending a lead.
- Original service content, town copy, article data, prices, metadata and enquiry integration preserved.

## Revised service opening

The six service pages now use a dark typographic hero, full-width gate photograph and a horizontal quote form beneath the image. The former sticky quote/other-gate sidebar is removed, and service content fills a centred reading layout. The shared form retains its stacked layout on town pages. Verified all six service pages at 320px with no horizontal overflow, required-field validation, and a successful production build.

The dark service hero includes subtle ornamental gate ironwork. The county directory uses a compact split hero, searchable town and district groups, and expandable local gate rules. Search, empty-state reset, keyboard expansion, and mobile/tablet layouts were verified; the production build passes.
