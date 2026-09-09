import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
const base = process.env.SKOUT_TEST_URL || "http://localhost:3000";
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const paths = ["/", "/about", "/apps", "/contact", "/privacy"];
await mkdir("artifacts", { recursive: true });
try {
  for (const width of [360, 390, 768, 1440, 1920]) {
    await page.setViewportSize({ width, height: 950 });
    for (const route of paths) {
      const response = await page.goto(`${base}${route}`);
      assert.equal(response.status(), 200, route);
      await page.locator("footer").scrollIntoViewIfNeeded();
      await page.evaluate(() =>
        Promise.all(Array.from(document.images).map((image) => image.decode())),
      );
      assert.equal(await page.locator("h1").count(), 1, `${route}: one h1`);
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${route}: no overflow at ${width}`,
      );
      assert.ok(
        (await page
          .locator('a[href="mailto:skoutlabs.dev@gmail.com"]')
          .count()) > 0,
      );
      if (width === 390 || width === 1440) {
        const results = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        assert.deepEqual(
          results.violations.map((v) => ({
            id: v.id,
            nodes: v.nodes.map((n) => n.target),
          })),
          [],
          `${route}: accessibility at ${width}`,
        );
      }
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  assert.equal(
    await page
      .getByRole("button", { name: "Close navigation" })
      .getAttribute("aria-expanded"),
    "true",
  );
  await page.keyboard.press("Escape");
  assert.equal(await toggle.getAttribute("aria-expanded"), "false");
  assert.ok(await toggle.evaluate((el) => el === document.activeElement));
  await toggle.click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Apps", exact: true })
    .click();
  await page.waitForURL(`${base}/apps`);
  assert.equal(await toggle.getAttribute("aria-expanded"), "false");
  for (const name of ["Budget Skout", "Recipe Skout", "Travel Skout", "Expedition Skout"]) {
    await page
      .getByRole("navigation", { name: "Applications", exact: true })
      .getByRole("link", { name })
      .click();
    await page.waitForURL(
      `${base}/apps#${name.toLowerCase().replace(" ", "-")}`,
    );
  }
  await page.goto(base);
  await page.screenshot({ path: "artifacts/home-mobile.png", fullPage: true });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: "artifacts/home-desktop.png", fullPage: true });
  await page.screenshot({
    path: "artifacts/home-preview.png",
    fullPage: false,
  });
  const links = new Set();
  for (const route of paths) {
    await page.goto(`${base}${route}`);
    for (const href of await page
      .locator("a[href]")
      .evaluateAll((items) => items.map((a) => a.getAttribute("href")))) {
      if (href.startsWith("/")) links.add(href.split("#")[0]);
    }
  }
  for (const route of links)
    assert.equal(
      (await page.request.get(`${base}${route}`)).status(),
      200,
      route,
    );
  for (const route of [
    "/icon.png",
    "/social-card.png",
    "/robots.txt",
    "/sitemap.xml",
  ])
    assert.equal(
      (await page.request.get(`${base}${route}`)).status(),
      200,
      route,
    );
  assert.equal(
    (await page.request.get(`${base}/not-a-real-page`)).status(),
    404,
  );
  assert.deepEqual(errors, [], "No browser errors");
  console.log(
    "PASS: 5 pages × 5 widths; accessibility; mobile navigation and Escape focus; app anchors; all internal links; images; metadata routes; 404; no browser exceptions.",
  );
} finally {
  await browser.close();
}
