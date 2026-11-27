import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium } from "@playwright/test";
import { browserOptions } from "./browser.mjs";

const origin = process.env.CV_ORIGIN ?? "http://127.0.0.1:4329/matteo-rpg-cv";
const directory = resolve("public", "cv");
await mkdir(directory, { recursive: true });
const browser = await chromium.launch(browserOptions());
try {
  const page = await browser.newPage();
  for (const locale of ["es", "en"]) {
    const response = await page.goto(`${origin}/${locale}/cv/`, {
      waitUntil: "networkidle",
    });
    if (!response?.ok()) throw new Error(`CV page failed: ${locale}`);
    await page.evaluate(() => document.fonts.ready);
    const output = resolve(directory, `matteo-fecci-${locale}.pdf`);
    await page.pdf({
      path: output,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      tagged: true,
    });
    console.log(`Generated public CV: ${output}`);
  }
} finally {
  await browser.close();
}
