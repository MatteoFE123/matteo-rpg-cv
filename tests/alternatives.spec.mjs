import { test, expect } from "@playwright/test";

const alternatives = [
  ["field-journal", "fieldbook-open"],
  ["relic-hall", "relic-reveal"],
  ["alchemy-workshop", "alchemy-place"],
  ["expedition-fold", "expedition-route"],
];

for (const [id, motion] of alternatives) {
  test(`${id}: distinct animated CV in both languages and at narrow widths`, async ({
    page,
  }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.addInitScript(() => {
      window.motionStarts = [];
      document.addEventListener("animationstart", (event) => {
        window.motionStarts.push(event.animationName);
      });
    });
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto(`es/mocks/${id}/`);
    await expect(page.locator("body")).toHaveClass(id);
    await expect(
      page.getByRole("heading", { name: "Matteo Fecci", exact: true }),
    ).toBeVisible();
    await expect
      .poll(() =>
        page.evaluate((name) => window.motionStarts.includes(name), motion),
      )
      .toBe(true);
    await expect(page.locator(".preview-notice > a")).toHaveAttribute(
      "href",
      /\/es\/designs\/new\/$/,
    );
    const filter = page.locator('button[data-filter="backend"]');
    await filter.focus();
    await page.keyboard.press("Enter");
    await expect(filter).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("[data-skill-group]:visible")).toHaveCount(1);
    const summary = page.locator(".project-list summary").first();
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(".project-list details").first()).toHaveAttribute(
      "open",
      "",
    );
    await page
      .locator(".preview-notice nav")
      .getByRole("link", { name: "EN" })
      .click();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(
      page.getByRole("link", { name: "Download CV", exact: true }),
    ).toBeVisible();
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const width of [390, 320]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(`en/mocks/${id}/`);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      const action = await page.locator(".primary-action").boundingBox();
      expect(action.y + action.height).toBeLessThan(740);
      expect(
        await page.evaluate(
          (name) => window.motionStarts.includes(name),
          motion,
        ),
      ).toBe(false);
    }
    expect(errors).toEqual([]);
  });
}
