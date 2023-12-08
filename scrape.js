const puppeteer = require('puppeteer-extra'); 

// Pick the website and filename
website = 'https://gtmdelta.com'
scrapefilename = 'gtmdelta'

// Timestamp time
function getDateString() {
    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day =`${date.getDate()}`.padStart(2, '0');
    const hour = `${date.getHours()}`;
    const minute = `${date.getMinutes()}`;
    const second = `${date.getSeconds()}`;
    return `${year}${month}${day}-${hour}${minute}${second}`
  }  

// Stealth mode time!
const StealthPlugin = require('puppeteer-extra-plugin-stealth'); 

// Use stealth 
puppeteer.use(StealthPlugin()); 

// Launch pupputeer-stealth 
puppeteer.launch({ headless: 'new' }).then(async browser => { 
    // Create a new page 
    const page = await browser.newPage(); 
 
    // Set the page view as a desktop view (or change to mobile dimensions if desired)
    await page.setViewport({ width: 1280, height: 720 }); 
 
    // Open a headless browser to the website
    await page.goto(website); 
 
    // Wait in case of security check 
    await page.waitForTimeout(10000); 

    // Take a screenshot of the entire page
    path = 'output/' + scrapefilename + '-' + getDateString() + '.png'
    await page.screenshot({ path: path, fullPage: true }); 
 
    // Close the session
    await browser.close(); 
});
