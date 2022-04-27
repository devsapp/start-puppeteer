const fs = require('fs');
const puppeteer = require('puppeteer');

function autoScroll(page) {
  return page.evaluate(() => {
      return new Promise((resolve, reject) => {
          var totalHeight = 0;
          var distance = 100;
          var timer = setInterval(() => {
              var scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;
              if (totalHeight >= scrollHeight) {
                  clearInterval(timer);
                  resolve();
              }
          }, 100);
      })
  });
}

module.exports.handler = function (request, response, context) {

  (async () => {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-zygote',
        '--no-sandbox'
      ]
    });

    let url = request.queries['url'];

    if (!url) {
      url = 'https://www.serverless-devs.com';
    }

    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      url = 'http://' + url;
    }

    const page = await browser.newPage();

    await page.emulateTimezone('Asia/Shanghai');
    await page.goto(url, {
      'waitUntil': 'networkidle2'
    });
    await page.setViewport({
      width: 1200,
      height: 800
    });
    await autoScroll(page)

    let path = '/tmp/example';
    let contentType = 'image/png';
    await page.screenshot({ path: path, fullPage: true, type: 'png' });
    await browser.close();

    response.setStatusCode(200);
    response.setHeader('content-type', contentType);
    response.send(fs.readFileSync(path))
  })().catch(err => {
    response.setStatusCode(500);
    response.setHeader('content-type', 'text/plain');

    response.send(err.message);
  });
};