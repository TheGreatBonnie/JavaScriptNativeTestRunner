const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert").strict;
const { describe, it, before, after } = require("node:test");

describe("Google Title Test", async () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  await it("should Navigate to Google and verify title", async () => {
    await driver.get("http://www.google.com");
    const title = await driver.getTitle();
    assert.strictEqual(title, "Google");
  });

  after(async () => {
    await driver.quit();
  });
});
