const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// Use stealth
puppeteer.use(StealthPlugin());

// Get command line argument for the website
const inputArgument = process.argv[2]; // Gets the third argument from command line
const website = `https://${inputArgument}`;
const scrapefilename = inputArgument.replace(/\W/g, '-') + '-com';

// Timestamp function
function getDateString() {
    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    const hour = `${date.getHours()}`;
    const minute = `${date.getMinutes()}`;
    const second = `${date.getSeconds()}`;
    return `${year}${month}${day}-${hour}${minute}${second}`
}

// Launch puppeteer-stealth
puppeteer.launch({ headless: 'new' }).then(async browser => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });

    // Open a headless browser to the website
    await page.goto(website);

    // Wait in case of security check 
    await page.waitForTimeout(10000);

    // Take a screenshot of the entire page
    const path = 'output/' + scrapefilename + '-' + getDateString() + '.png';
    await page.screenshot({ path: path, fullPage: true });

    // Close the session
    await browser.close();
});
