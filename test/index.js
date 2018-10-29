const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://ya.ru');
  await page.type('#text', 'adventure time');
  await page.keyboard.press('Enter');

  await page.waitForNavigation();

  await page.screenshot({path: 'example.png', fullpage: true});

  await browser.close();
})();