'use strict';

const express = require('express');

const fs = require('fs');
const puppeteer = require('puppeteer');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// HTTP function invocation
const app = express();
app.get('/*', (req, res) => {
  (async () => {
    var rid = req.headers["x-fc-request-id"];
    console.log(req.headers);
    console.log(`FC Invoke Start RequestId: ${rid}`);
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ]
    });

    let url = req.query['url'];

    if (!url) {
      url = 'https://www.baidu.com';
    }

    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      url = 'http://' + url;
    }

    const page = await browser.newPage();

    await page.emulateTimezone('Asia/Shanghai');
    await page.goto(url, {
      'waitUntil': 'networkidle2'
    });

    let path = '/tmp/example';
    let contentType;

    if (req.query['pdf']) {
      contentType = 'application/pdf';
      await page.pdf({
        path: path,
        displayHeaderFooter: false
      });
    } else {
      contentType = 'image/png';
      await page.screenshot({ path: path, fullPage: true, type: 'png' });
    }

    await browser.close();

    res.setHeader('Content-Type', contentType);
    res.status(200).send(fs.readFileSync(path));
    console.log(`FC Invoke End RequestId: ${rid}`);
  })().catch(err => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(500).send(err.message);
    console.log(`FC Invoke End RequestId: ${rid}`);
  });
});

// Event function invocation
app.post('/invoke', (req, res) => {
  var rid = req.headers["x-fc-request-id"];
  console.log(`FC Invoke Start RequestId: ${rid}`);
  res.send('Hello FunctionCompute, event function\n');
  console.log(`FC Invoke End RequestId: ${rid}`);
});

var server = app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

server.timeout = 0; // never timeout
server.keepAliveTimeout = 0; // keepalive, never timeout
