import { chromium, expect } from "@playwright/test";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";

const browser = await chromium.launch();
const base = process.env.SKOUT_TEST_URL || "http://localhost:3000";
const errors = [];
try {
  const page = await browser.newPage({
    reducedMotion: "reduce",
    viewport: { width: 390, height: 844 },
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(base);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const animatedStyles = () =>
    page
      .locator(".hero-copy > *, .journey-map, .map-stop, .app-card")
      .evaluateAll((elements) =>
        elements.some((el) => el.style.transform || el.style.opacity),
      );
  assert.equal(
    await animatedStyles(),
    false,
    "Reduced motion leaves content in its resting state",
  );
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect.poll(animatedStyles).toBe(true);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(animatedStyles).toBe(false);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(page.locator(".journey-map")).not.toHaveAttribute(
    "style",
    /transform/,
  );
  await page
    .getByRole("link", { name: "FOLLOW YOUR CURIOSITY Discover something new" })
    .click();
  await expect(page).toHaveURL(`${base}/apps`);
  await expect(page.locator(".page-transition")).not.toHaveAttribute(
    "style",
    /transform/,
  );
  await page.goBack();
  await expect(page).toHaveURL(`${base}/`);
  await expect(page.locator(".page-transition")).not.toHaveAttribute(
    "style",
    /transform/,
  );
  await page.goto(base);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(animatedStyles).toBe(false);
  await mkdir("artifacts", { recursive: true });
  await page.screenshot({
    path: "artifacts/journey-mobile.png",
    fullPage: false,
  });
  await page.setViewportSize({ width: 900, height: 1000 });
  await page.screenshot({
    path: "artifacts/journey-tablet.png",
    fullPage: false,
  });
  assert.deepEqual(errors, []);
  console.log(
    "PASS: reduced motion, live preference changes, entrance completion, collection link, route re-entry, no browser errors.",
  );
} finally {
  await browser.close();
}
