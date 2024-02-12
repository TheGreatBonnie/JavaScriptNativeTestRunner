const { describe, it } = require("node:test");
const assert = require("node:assert");
const { Builder, By, Key, until } = require("selenium-webdriver");

describe("Expected Values To Be Strictly Equal", async () => {
  let driver;
  driver = await new Builder().forBrowser("chrome").build();
  it("should be strictly equal", async () => {
    await driver.get("http://www.google.com");
    const title = await driver.getTitle();
    assert.strictEqual(title, "Google");
  });

  it("skip test option", { skip: true }, async (t) => {
    await driver.get("http://www.google.com");
    const title = await driver.getTitle();
    assert.strictEqual(title, "Google");
  });

  it(
    "skip test option with message",
    { skip: "This test is skipped" },
    async (t) => {
      await driver.get("http://www.google.com");
      const title = await driver.getTitle();
      assert.strictEqual(title, "Google");
    }
  );

  it("Calling skip() method", async (t) => {
    await driver.get("http://www.google.com");
    const title = await driver.getTitle();
    assert.strictEqual(title, "Google");
    t.skip();
  });

  it("Calling skip() method with message", async (t) => {
    await driver.get("http://www.google.com");
    const title = await driver.getTitle();
    assert.strictEqual(title, "Google");
    t.skip("This test is skipped");
  });

  await it("Cleanup: Close the browser", async () => {
    await driver.quit();
  });
});
