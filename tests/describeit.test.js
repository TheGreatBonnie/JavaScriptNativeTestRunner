const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert").strict;
const { describe, it } = require("node:test");

describe("Form Input Test", async () => {
  let driver;

  await it("Setup WebDriver", async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  await it("should input values in a form and check their sum", async () => {
    await driver.get("https://www.lambdatest.com/selenium-playground/simple-form-demo");

    await driver.findElement(By.id("sum1")).sendKeys(2);
    await driver.findElement(By.id("sum2")).sendKeys(3);
    await driver.findElement(By.xpath("//button[normalize-space()='Get Sum']")).click();

    let sum = await driver.wait(until.elementLocated(By.id("addmessage")),10000);
    let sumNo = await sum.getText();
    assert.strictEqual(sumNo, "5");
  });

  await it("Cleanup: Close the browser", async () => {
    await driver.quit();
  });
});
