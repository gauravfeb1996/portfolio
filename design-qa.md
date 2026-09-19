# Design QA — Gaurav Verma portfolio

**Comparison target**

- Source visual truth: `C:\Users\91780\Downloads\Codex Image Sep 18, 2026, 11_43_16 PM.png` (mobile/light) and `C:\Users\91780\Downloads\Codex Image Sep 18, 2026, 11_44_08 PM.png` (desktop/dark).
- Implementation: browser-rendered `http://127.0.0.1:4173/`.
- Rendered checks: 1440 × 960 desktop (dark) and the in-app browser's 650px-wide responsive/mobile layout (light and dark). CSS pixel density: 1; source images were used as visual references without density scaling.
- State: default light, default dark after theme-toggle activation, hero at top of page.

**Full-view comparison evidence**

- Desktop check confirmed the two-column hero, technical grid, central navigation, four-column metric strip, left-copy/right-visual case-study rhythm, compact technology grid, timeline, CTA, and footer.
- Responsive check confirmed that the header collapses to the menu control, metrics switch to two columns, every project visual follows its copy, and product visuals remain contained without horizontal scrolling.
- Focused regions: the hero workflow, Spinny vehicle list, automation workflow, phone pair, Brevo architecture, and DoPrep dashboard were inspected because these are the densest visible regions.

**Findings**

- No actionable P0/P1/P2 findings. The required text hierarchy, section ordering, design tokens, brand accent separation, theme behavior, and responsive rules are implemented.

**Required fidelity surfaces**

- Fonts and typography: DM Serif Display is used for display headings, DM Sans for UI/body, DM Mono for labels/metrics, and Patrick Hand for notes. Heading and mobile scales follow the supplied handoff.
- Spacing and layout rhythm: desktop uses the requested 64–80px horizontal rhythm and two-column composition; mobile uses 20px gutters, 48px section padding, stacked project layout, and 2-column metric/technology grids.
- Colors and visual tokens: the supplied light and dark token sets are CSS variables. Spinny, Brevo, DoPrep, WhatsApp, and coral escalation accents are kept separate.
- Image and asset fidelity: no external raster assets were supplied. Product views are rendered as live, accessible React UI so they respond cleanly at the requested breakpoints; react-icons supplies the specified UI-icon style.
- Copy and content: case-study, metric, timeline, CTA, and footer copy match the handoff; the 40% → 8% metric is retained exactly.

**Interaction checks**

- Theme toggle changed the rendered theme and persists through `localStorage`.
- Work/contact/navigation links resolve to their page anchors; mail CTAs use `mailto:`.
- The hero workflow animation respects reduced-motion preferences.
- Browser accessibility tree exposed named navigation, headings, themed control, links, and email actions. No console errors were observed during the rendered checks.

**Implementation checklist**

- [x] Responsive desktop and mobile layouts
- [x] Persistent light/dark toggle
- [x] Brand-specific case-study visuals and note colors
- [x] Accessible navigation, labels, focusable links, and mail CTAs
- [x] Production build and Sites packaging tests

**Follow-up polish**

- [P3] If original brand logo/vehicle/product-image source files become available, they can replace the intentionally lightweight live UI representations for even tighter pictorial fidelity.

final result: passed
