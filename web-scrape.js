const puppeteer = require('puppeteer');
const https = require('https');

async function scrape(url) {
    const outFile = url.split('/').pop().replace('.json', '').replace(/\W/g, '-') + '-' + getDateString() + '.png';
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto(url);
    await page.waitForTimeout(10000);  // Wait for security checks or page load
    await page.screenshot({ path: 'output/' + outFile, fullPage: true });
    await browser.close();
}

function getDateString() {
    const date = new Date();
    return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
}

function fetchUrlsAndScrape() {
    https.get('https://cortex.gtmdelta.com/links.json', (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Process the result.
        resp.on('end', () => {
            const links = JSON.parse(data);
            links.forEach(link => {
                scrape(link.url);
            });
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

fetchUrlsAndScrape();
