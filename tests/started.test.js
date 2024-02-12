const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert").strict;
const { test } = require("node:test");

{
  let driver;

  test("Setup WebDriver for Google Search Test Suite", async (t) => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  test("Navigate to Google and verify title", async (t) => {
    await driver.get("http://www.google.com");
    const title = await driver.getTitle();
    assert.strictEqual(title, "Google");
  });

  test("Cleanup after Google Search Test Suite", async (t) => {
    await driver.quit();
  });
}
