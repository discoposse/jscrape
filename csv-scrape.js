const puppeteer = require('puppeteer');
const fs = require('fs');
const csv = require('csv-parser');
const readlines = require('readline');

async function scrape(url, outFile) {
  puppeteer.launch({ headless: 'new' }).then(async browser => {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 720 });
      await page.goto(url);
      await page.waitForTimeout(10000);  // Wait for security checks or page load
      
      // Constructing the output file path
      let path = 'output/' + outFile + '-' + getDateString() + '.png';
      await page.screenshot({ path: path, fullPage: true });

      await browser.close();
  });
}

function getDateString() {
  const date = new Date();
  return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
}

async function readCSVAndScrape() {
  const fileStream = fs.createReadStream('source-urls.csv');
  const rl = readlines.createInterface({
      input: fileStream,
      crlfDelay: Infinity
  });

  let isFirstLine = true;
  for await (const line of rl) {
      if (isFirstLine) {
          isFirstLine = false;  // Skip the header line
          continue;
      }

      const row = line.split(',');
      console.log('URL:', row[0], 'Outfile:', row[1]);
      await scrape(row[0], row[1].trim());
  }

  console.log('CSV file successfully processed');
}

readCSVAndScrape();
