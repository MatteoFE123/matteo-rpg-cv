---
name: "Atlas del artífice"
description: "A stone-and-forest atlas for a real AI engineering CV."
colors:
  stone-ground: "#d9d4c5"
  stone-paper: "#eae5d7"
  forest-ink: "#183f32"
  forest-secondary: "#355547"
  forest-field: "#23604b"
  on-forest: "#faf9f2"
  stone-rule: "#97a592"
  ochre-destination: "#e6b74a"
  destination-ink: "#243528"
  skills-ink: "#f3f1e7"
  skills-secondary: "#d8e2d5"
  on-ochre: "#233528"
  skills-paper: "#355e4f"
  skills-rule: "#749082"
  education-ground: "#e6e0cc"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.75rem, 5.5vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.9rem, 3vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.5
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1.65
rounded:
  control: "4px"
spacing:
  tight: "0.5rem"
  inline: "1rem"
  inset: "1.25rem"
  group: "2rem"
  separation: "3rem"
  section: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.forest-field}"
    textColor: "{colors.on-forest}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.2rem"
  skill-filter:
    backgroundColor: "transparent"
    textColor: "{colors.skills-ink}"
    rounded: "{rounded.control}"
    padding: "0.6rem 0.85rem"
  skill-filter-selected:
    backgroundColor: "{colors.ochre-destination}"
    textColor: "{colors.on-ochre}"
    rounded: "{rounded.control}"
    padding: "0.6rem 0.85rem"
  skill-tag:
    backgroundColor: "{colors.skills-paper}"
    textColor: "{colors.skills-ink}"
    padding: "0.3rem 0.65rem"
  language-navigation:
    textColor: "{colors.forest-ink}"
  project-disclosure:
    textColor: "{colors.forest-ink}"
    padding: "1.25rem 0.25rem"
  route-destination:
    backgroundColor: "{colors.ochre-destination}"
    textColor: "{colors.destination-ink}"
    rounded: "{rounded.control}"
    padding: "0.65rem 0.9rem"
---

# Design System: Atlas del artífice

## Overview

**Creative North Star: "Atlas del artífice"**

A stone-ground atlas gives real AI engineering a tabletop-fantasy lens without disguising the professional record. Forest-green fields and ochre destinations make exploration legible; compact Manrope, ruled sections and bounded controls keep the work readable.

The world is flat, functional and code-led: vector geometry is navigation, not a raster picture. Warm tonal surfaces establish hierarchy; motion draws a route or explains a state change rather than staging repeated entrances.

**Key Characteristics:**

- Warm stone surfaces with forest-green ink and fields.
- Ochre destinations and selected controls.
- One self-hosted face with clear scale and weight changes.
- Flat geometry, stationary targets and bounded motion.

Source origin: the user-selected live Civic Garden composition, from design-lib specimen DL-011. This is scan-mode documentation, not a seeded Impeccable catalog world. The development surface brief retains the discovery reference and page-specific direction contract.

## Colors

The palette pairs warm stone with wooded greens; ochre identifies a destination or a selected state. Frontmatter values are normative.

### Primary

- **Forest Field:** route geography, primary actions and the skills section.
- **Forest Ink / Forest Secondary:** main and supporting text on stone.

### Secondary

- **Ochre Destination:** map targets, route progress and selected skill filters.
- **Destination Ink / On Ochre:** distinct source foregrounds for map targets and selected filters; do not collapse their nearly matching values.

### Neutral

- **Stone Ground / Stone Paper / Stone Rule:** page surface, inherited paper token and dividers.
- **On Forest:** light text on primary actions.
- **Skills Ink / Skills Secondary / Skills Paper / Skills Rule:** the complete light-on-green reading scope, including tinted secondary text and skill tags.
- **Education Ground:** the warm tonal surface used for education.

**The Surface Scope Rule.** On forest-green skills surfaces, switch foreground, secondary text, accent, on-accent, paper and rules together; never inherit stone-surface ink there.

Selection uses the current scope's accent and on-accent. Scrollbars use the page accent and ground. Sidecar tonal ramps are synthesized inspection aids, not additional shipped palette tokens.

## Typography

**Display and Body Font:** self-hosted Manrope, with sans-serif fallback. The Latin WOFF2 is preloaded; its declared weight range is (400–700), with font-display swap.

The frontmatter records the actual display, headline, title, body and action-label roles. Headings balance their lines; body paragraphs have a maximum measure of (70ch), with the introduction narrowed to (40ch). Professional role text uses (1.2rem, 700); section subtitles use (1rem, 600, 1.4 line-height). Supporting labels stay smaller, not uppercase decorative eyebrows. Dates and the filter count use tabular numerals.

**The One Face Rule.** Manrope carries every production type role; archive-only font faces are not part of this atlas.

## Layout

The CV container is centered with a maximum width of (1440px). A compact, ruled header uses a minimum height of (64px); its language targets are at least (44px × 44px).

The current atlas pairs profile and map in a (1fr / 1.25fr) grid, separated by (2rem), with a minimum composition height of (430px). The map has a minimum height of (400px). This is the chosen page composition, not a mandatory template for every future surface.

Reading sections use (4rem 5vw) padding. Profile and employment rows pair metadata with prose in a (1fr / 2fr) grid with a (3rem) gap; skills use two columns and education three. Employment is a ruled list, not a card grid. The career section's current desktop inset is (10vw).

At widths up to (767px), these reading grids and the atlas stack. Reading padding becomes (3rem 1.25rem), atlas gap (1.5rem), map minimum height (290px), and career inset (1.25rem). The profile and download remain before the map. Filters wrap, and project metadata moves below its title.

## Elevation & Depth

No shadows are used in the production atlas. Stone, green and education surfaces, whitespace and thin rules establish depth. The profile's stacking layer keeps it readable beside the map; it does not imply elevation.

**The Flat Field Rule.** Separate content with tonal surfaces, whitespace and rules, not lifted or shadowed cards.

## Shapes

Small controls use the frontmatter's gently bounded control radius. Skill tags are plain rectangular labels; reading content is not enclosed in rounded cards. Borders and dividers are (1px).

The signature map is authored vector geometry: a closed land contour, a continuous route and destination labels. It is a functional diagram, not a faux illustration or a photographic cutout. Preserve the relation between route and targets when adapting it.

## Components

### Primary actions

Compact, flat anchors use Forest Field and On Forest, with a minimum height of (46px). Hover applies brightness (0.9); active press moves the action down (1px). Under normal motion preferences, transform and brightness feedback take (160ms, ease-out). PDF download and LinkedIn use the same primitive, not competing visual languages.

### Language navigation

Plain underlined language links sit beside the atlas wordmark. The current language is marked semantically and visually with weight (700) and underline thickness (3px); hover underline thickness is (2px). Preserve the real language target and its lang attribute.

### Skill filters and tags

Filters are outlined controls with a minimum height of (44px). Unselected controls retain the green section's foreground and rule; pressed controls switch to Ochre Destination and On Ochre. Hover changes the border to the local accent. Tags use Skills Paper, not the stone paper token, and remain noninteractive.

Press state, group visibility and the live result count change immediately. Group FLIP takes (280ms); existing movement is cancelled before the next layout change. Without JavaScript all skills remain readable.

### Project disclosures

Native details/summary rows use a bottom rule, a medium-weight title (1.12rem, 600), and smaller supporting metadata (0.8rem, 400). Expanded content stays in the reading flow, not a modal or nested card.

Opening uses clipped content and layout motion (280ms); closing fades with a small upward movement (150ms), then settles layout (110ms). Rapid reversals continue from the current visual state. Native disclosures remain operable without JavaScript.

### Atlas routes

Ochre targets stay stationary. Only their title lifts (2px) on hover or keyboard focus, over (220ms). The stone route draws once (750ms); its ochre progress stroke responds to the targeted destination (420ms). These use cubic-bezier(0.16, 1, 0.3, 1).

The map's SVG is hidden from assistive technology; real named anchors carry navigation. Desktop target minimum width is (116px); on phones it becomes (98px), with reduced padding and title size.

### Focus and motion fallback

Focus uses a visible outline (3px) with an offset of (5px), colored by the local accent; map targets use ochre. Links retain underline offset (0.25em), and the skip link becomes visible on focus.

Route transitions are enabled only without a reduced-motion preference; reduced motion retains immediate destination feedback. Client motion is skipped when reduced motion is requested, the document is hidden, or WAAPI is unavailable. Preference changes and hidden-document events cancel running client motion and settle disclosure state. There are no loops or scroll listeners.

## Do's and Don'ts

### Do:

- Do pair each surface with its own foreground and rule scope.
- Do retain professional identity and equivalent ES/EN hierarchy.
- Do keep reading content flat, with tonal separation and ruled lists.
- Do preserve keyboard focus, native disclosure fallback and immediate reduced-motion state changes.
- Do use crisp vector navigation and bounded, interruption-safe transitions.

### Don't:

- Don't import archive palettes, display fonts or animation grammars into production.
- Don't replace factual content with invented proficiency graphics or game gates.
- Don't move destination hit areas during interaction or hide evidence behind motion.
- Don't add decorative shadows, glass, looping entrances or scroll-driven effects.
