const assert = require("assert");

describe("Automation practice - Google Search", function() {
  it("should have the right title", async () => {
    await browser.url("");
    const title = await browser.getTitle();
    assert.strictEqual(title, "Google");
  });
});
