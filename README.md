### Scrape all the things!
## ...or at least a thing

Welcome to jscrape! A super simple image-output scraping script which uses Puppeteer and the Puppeteer Stealth plugin to help with issues where you may be restricted by robots.txt or some validators.

This is 100% delivered as-is by someone who is not a programmer :)

# How to run the thing

First thing to do is open up scrape.js and set the web URL and filename in line 4 and line 5. Then just run the file. 

```
node scrape.js
```

The process will take a screenshot of the website and store a PNG image under the output folder with a timestamp and the filename as you set it. 

Filename format is whatever you set as the scrapefilename variable in line 5 followed by the YYYYMMDD-HHmmss date format.

e.g. gtmdelta-20231207-184247.png



