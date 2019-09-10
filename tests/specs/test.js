const assert = require("assert");

describe("Automation practice home page", function() {
  it("should have the right title", async () => {
    await browser.url("");
    const title = await browser.getTitle();
    assert.strictEqual(title, "Google");
  });
  it("should have the right titlea", async () => {
    await browser.url("");
    const title = await browser.getTitle();
    assert.strictEqual(title, "Google");
  });
  it("should have the right titlee", async () => {
    await browser.url("");
    const title = await browser.getTitle();
    assert.strictEqual(title, "Google");
  });
});
