const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    logger: {
      isEnabled: (name, severity) => name === 'browser',
      log: (name, severity, message, args) => console.log(`${name} ${message}`),
    },
  });
})();
