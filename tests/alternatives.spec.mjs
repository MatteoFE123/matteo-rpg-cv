import { test, expect } from "@playwright/test";

const alternatives = [
  ["field-journal", "fieldbook-open"],
  ["relic-hall", "relic-reveal"],
  ["alchemy-workshop", "alchemy-place"],
  ["expedition-fold", "expedition-route"],
  ["guild-board", "quest-place"],
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
    const pairs = await page.evaluate(() => {
      function background(element) {
        while (element) {
          const color = getComputedStyle(element).backgroundColor;
          if (color !== "rgba(0, 0, 0, 0)" && color !== "transparent")
            return color;
          element = element.parentElement;
        }
        return "rgb(255, 255, 255)";
      }
      return [
        ...document.querySelectorAll(
          ".introduction, .primary-action, .source-note, .skill-filters button, .skill-group h3, .skill-group li, .option-hero nav a",
        ),
      ].map((element) => ({
        foreground: getComputedStyle(element).color,
        background: background(element),
      }));
    });
    const luminance = (color) => {
      const channels = color
        .match(/[\d.]+/g)
        .slice(0, 3)
        .map(Number)
        .map((n) => n / 255);
      return channels
        .map((n) => (n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4))
        .reduce((sum, n, i) => sum + n * [0.2126, 0.7152, 0.0722][i], 0);
    };
    for (const pair of pairs) {
      const values = [
        luminance(pair.foreground),
        luminance(pair.background),
      ].sort((a, b) => a - b);
      expect(
        (values[1] + 0.05) / (values[0] + 0.05),
        `${id}: ${JSON.stringify(pair)}`,
      ).toBeGreaterThanOrEqual(4.5);
    }
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

test("the new comparison gives five unselected designs equal visual space", async ({
  page,
}) => {
  await page.goto("es/designs/new/");
  const cards = page.locator(".direction-card");
  await expect(cards).toHaveCount(5);
  const widths = await cards.evaluateAll((items) =>
    items.map((item) => item.getBoundingClientRect().width),
  );
  expect(Math.max(...widths) - Math.min(...widths)).toBeLessThan(1);
  for (const image of await cards.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate(
          (element) => element.complete && element.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  await expect(page.locator(".selection-note").first()).toContainText(
    "Ninguna está elegida",
  );
  await page
    .locator(".gallery-header nav")
    .getByRole("link", { name: "EN" })
    .click();
  await expect(page).toHaveURL(/\/en\/designs\/new\/$/);
  await expect(cards).toHaveCount(5);
  await expect(page.locator(".selection-note").first()).toContainText(
    "None has been selected",
  );
});

test("guild notices retain native keyboard disclosure and no-JavaScript access", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(new URL("es/mocks/guild-board/", baseURL).href);
  const notice = page.locator(".quest-card").first();
  await notice.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(notice).toHaveAttribute("open", "");
  await expect(notice.locator(".quest-content")).toContainText("MCP");
  await page.setViewportSize({ width: 320, height: 740 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await notice.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(notice).not.toHaveAttribute("open", "");
  await context.close();
});
