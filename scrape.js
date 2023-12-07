const puppeteer = require('puppeteer-extra'); 

// Timestamp time
function getDateString() {
    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day =`${date.getDate()}`.padStart(2, '0');
    return `${year}${month}${day}`
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
 
    // Opne the website
    await page.goto('https://gtmdelta.com/'); 
 
    // Wait in case of security check or lazy load
    await page.waitForTimeout(10000); 

    // Get the date to name our output file
    scrapedate = datetime.now(*).str

    // Take a screenshot of the entire page
    await page.screenshot({ path: 'gtmdelta-${getDateString()}.png', fullPage: true }); 

    // Get title text 
    title = await page.evaluate(() => { 
        return document.querySelector('body > div.nonhystericalbg > div > header > div > h3').textContent; 
    }); 
 
    // Get message text 
    msg = await page.evaluate(() => { 
        return document.querySelector('body > div.nonhystericalbg > div > main > h1').textContent; 
    }); 
 
     // get state text 
    state = await page.evaluate(() => { 
        return document.querySelector('body > div.nonhystericalbg > div > main > p:nth-child(2)').textContent; 
     }); 
 
    // print to console because we are old school
    console.log(title, '\n', msg, '\n', state); 
 
    // Close the session
    await browser.close(); 
});
