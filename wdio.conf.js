const takeScreenshot = require("./utils/screenshot");
const { addFeature } = require("@wdio/allure-reporter").default;

exports.config = {
  runner: "local",
  hostname: "localhost",
  port: 4444,
  path: "/wd/hub",
  specs: ["./tests/**/*.js"],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "firefox"
    }
  ],
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "reports/allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true
      }
    ]
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "https://www.google.com",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000
  },
  afterTest(test) {
    if (test.passed === false) {
      takeScreenshot("./logs/screenshot/", "screenshot_fail.png");
    }
  }
};
