const playwright = require("@playwright/test");

const chromiumOptions = {
  headless: false,
  timeout: 20000
}

const firefoxOptions = {
  headless: false
}

function getBrowser(browserName) {
        // Convert browserName to lowercase to handle case-insensitivity
        const normalizedBrowserName = browserName.toLowerCase();
      
        switch (normalizedBrowserName) {
          case 'firefox':
            return playwright.firefox.launch(firefoxOptions);
          case 'webkit':
            return playwright.webkit.launch();
          case 'chrome':
            return playwright.chromium.launch(chromiumOptions);
          default:
            throw new Error(`Unsupported browser: ${browserName}`);
        }
      }

      module.exports={
        getBrowser: getBrowser
      }
      