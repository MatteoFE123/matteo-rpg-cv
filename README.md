# Matteo RPG CV

A bilingual, tabletop-fantasy CV for Matteo Fecci. **Visual selection is pending**:
the first deliverable is five independent, equally presented mocks, not a finished portfolio.

## Local preview

```powershell
npm ci
npm run dev
```

Open the address printed by Astro. The index links to all five directions in Spanish and English.
Node 22.23.4 or newer is required; the development dependencies include a project-local runtime
so npm scripts do not require changing a shared system installation.

## Checks

```powershell
npm run check
npm run format:check
npm run build
npm test
```

Browser tests use Playwright. Install its Chromium once with `npx playwright install chromium`
if no compatible local Chrome is available.

## Approved scope

| Topic         | Decision                                                                    |
| ------------- | --------------------------------------------------------------------------- |
| Audience      | Recruiters and technical hiring managers                                    |
| Languages     | Spanish and English                                                         |
| Hosting       | Static Astro site on GitHub Pages                                           |
| Interactions  | Optional skill filtering, project details and reduced-motion-aware feedback |
| Contact       | LinkedIn; no phone, personal email or contact locality                      |
| Downloads     | Regenerated public CVs; the private original is never committed             |
| Education     | UNIR master's degree completed, confirmed by Matteo                         |
| Visual choice | Five mocks from the fixed random design-lib sample; no default winner       |

See [PRODUCT.md](PRODUCT.md) for confirmed product truth and [GLOSSARY.md](GLOSSARY.md) for domain terms.

## Updating the public CV

Edit `src/data/cv.ts`, then run `npm run cv:generate` while the local preview server is running.
The generator prints both professional CV pages into `public/cv/` using the same approved data.
Never copy the privately supplied original into this repository.

## License

Application code is MIT-licensed. The CV, biographical text, personal information and identity
are excluded from that grant; see [CONTENT-LICENSE.md](CONTENT-LICENSE.md).
