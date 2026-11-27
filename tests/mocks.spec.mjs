import { test, expect } from "@playwright/test";

const directions = [
  "civic-garden",
  "archive-room",
  "signal-index",
  "process-ledger",
  "metric-chorus",
];
const focalMotion = {
  "civic-garden": "atlas-route",
  "archive-room": "archive-settle",
  "signal-index": "codex-ink",
  "process-ledger": "ledger-entry",
  "metric-chorus": "ink-duration",
};

for (const direction of directions) {
  test(`${direction}: bilingual exploration, keyboard controls and mobile layout`, async ({
    page,
  }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.addInitScript(() => {
      window.motionStarts = [];
      document.addEventListener("animationstart", (event) => {
        window.motionStarts.push(event.animationName);
      });
    });
    await page.goto(`es/mocks/${direction}/`);
    await expect
      .poll(() =>
        page.evaluate(
          (name) => window.motionStarts.includes(name),
          focalMotion[direction],
        ),
      )
      .toBe(true);
    await expect(
      page.getByRole("heading", { name: "Matteo Fecci", exact: true }),
    ).toBeVisible();
    const skillContrast = await page
      .locator(".skill-group li")
      .first()
      .evaluate((element) => {
        const channels = (color) =>
          color
            .match(/[\d.]+/g)
            .slice(0, 3)
            .map(Number);
        const luminance = (color) =>
          channels(color)
            .map((value) => {
              const channel = value / 255;
              return channel <= 0.04045
                ? channel / 12.92
                : ((channel + 0.055) / 1.055) ** 2.4;
            })
            .reduce(
              (sum, value, index) =>
                sum + value * [0.2126, 0.7152, 0.0722][index],
              0,
            );
        let ancestor = element;
        let background = getComputedStyle(ancestor).backgroundColor;
        while (background === "rgba(0, 0, 0, 0)" && ancestor.parentElement) {
          ancestor = ancestor.parentElement;
          background = getComputedStyle(ancestor).backgroundColor;
        }
        const values = [
          luminance(getComputedStyle(element).color),
          luminance(background),
        ].sort((a, b) => b - a);
        return (values[0] + 0.05) / (values[1] + 0.05);
      });
    expect(skillContrast).toBeGreaterThanOrEqual(4.5);
    const download = page.getByRole("link", {
      name: "Descargar CV",
      exact: true,
    });
    const bounds = await download.boundingBox();
    expect(bounds.y + bounds.height).toBeLessThan(720);

    const backend = page.getByRole("button", { name: "Backend y APIs" });
    await backend.focus();
    await page.keyboard.press("Enter");
    await expect(backend).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator('[data-skill-group="ai"]')).toBeHidden();
    await expect(page.locator('[data-skill-group="backend"]')).toBeVisible();
    await expect(page.locator("[data-skill-count]")).toHaveText("6");
    await page.getByRole("button", { name: "Todas", exact: true }).click();
    await expect(page.locator('[data-skill-group="ai"]')).toBeVisible();

    const summary = page.locator("details summary").first();
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("details").first()).toHaveAttribute("open", "");
    await expect(page.locator("details .project-body").first()).toBeVisible();
    await expect(
      page.getByText("Marzo 2025 - marzo 2026. Completado."),
    ).toBeVisible();

    await page
      .locator(".preview-notice nav")
      .getByRole("link", { name: "EN", exact: true })
      .click();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(
      page.getByRole("link", { name: "Download CV", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("March 2025 - March 2026. Completed."),
    ).toBeVisible();

    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`es/mocks/${direction}/`);
    expect(
      await page.evaluate(
        (name) => window.motionStarts.includes(name),
        focalMotion[direction],
      ),
    ).toBe(false);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await expect(
      page.getByRole("link", { name: "Descargar CV", exact: true }),
    ).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test("gallery presents five equally sized directions and public-safe downloadable PDFs", async ({
  page,
  request,
}) => {
  await page.goto("./");
  const cards = page.locator(".direction-card");
  await expect(cards).toHaveCount(5);
  const widths = await cards.evaluateAll((elements) =>
    elements.map((element) => element.getBoundingClientRect().width),
  );
  expect(Math.max(...widths) - Math.min(...widths)).toBeLessThan(1);
  await expect(page.locator(".direction-card img")).toHaveCount(5);
  for (const image of await page.locator(".direction-card img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() => image.evaluate((element) => element.naturalWidth))
      .toBeGreaterThan(0);
  }
  for (const locale of ["es", "en"]) {
    const response = await request.get(`cv/matteo-fecci-${locale}.pdf`);
    expect(response.ok()).toBe(true);
    expect((await response.body()).subarray(0, 4).toString()).toBe("%PDF");
    const printable = await request.get(`${locale}/cv/`);
    const content = await printable.text();
    expect(content).not.toMatch(/mailto:|tel:|[\w.+-]+@[\w.-]+\.[a-z]{2,}/i);
    expect(content).not.toMatch(/\b\d{9}\b/);
    expect(content).not.toMatch(/In progress|En curso/i);
  }
});
