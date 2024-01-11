### Scrape all the things!
## ...or at least a thing

Welcome to jscrape! A super simple image-output scraping script which uses Puppeteer and the Puppeteer Stealth plugin to help with issues where you may be restricted by robots.txt or some validators.

This is 100% delivered as-is by someone who is not a programmer :smiley:

## How to use

# There are 3 ways to run the process:
1. scrape.js - the original way with hardcoded url (not recommended but it was the first version)
2. web-scrape.js - pass a url to the script in one command
3. csv-scrape.js - the new way with a CSV for bulk scraping

Here are the instructions for each:


## scrape.js - the original way

First thing to do is open up scrape.js and set the web URL and filename in line 4 and line 5. 
```
// Pick the website and filename
website = 'https://gtmdelta.com'
scrapefilename = 'gtmdelta'
```

Then just run the file. 

```
node scrape.js
```

The process will take a screenshot of the website and store a PNG image under the output folder with a timestamp and the filename as you set it. 

Filename format is whatever you set as the scrapefilename variable in line 5 followed by the YYYYMMDD-HHmmss date format.

e.g. gtmdelta-20231207-19437.png

![example](gtmdelta-20231207-19437.png)

## web-scrape.js - pass a url to the script in one command

To use this script, run it from the command line with the desired domain as an argument. For example:

```
node scrape.js gtmdelta.com
``` 

This will scrape *https://gtmdelta.com* and save the screenshot with a filename like ```gtm-delta-com-YYYYMMDD-HHMMSS.png``` in the output directory.


## csv-scrape.js - the new way with a CSV for bulk scraping

* Rename ```source-urls.csv.example``` to ```source-urls.csv```
* Update the file using the format "url,outfile" (e.g. "https://gtmdelta.com,gtmdelta")
* Run the script

```
node csv-scrape.js
```


## Features in the backlog
* Parse an API and scrape all the links.
* properly document it all
