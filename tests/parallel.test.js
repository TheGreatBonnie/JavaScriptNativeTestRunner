const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert").strict;
const { describe, it, before, after } = require("node:test");

describe("Google Title Test", { concurrency: true }, async () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  await it("should Navigate to Google and verify title", async () => {
    await driver.get("http://www.google.com");
    const title = await driver.getTitle();
    assert.strictEqual(title, "Google");

    driver.getT;
  });

  await it("should perform Google Search", async () => {
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
    const title = await driver.getTitle();
    assert.strictEqual(title, "Selenium - Google Search");
  });

  after(async () => {
    await driver.quit();
  });
});
