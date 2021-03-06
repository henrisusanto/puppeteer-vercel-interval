const puppeteer = require('puppeteer');
const chromium = require('chrome-aws-lambda');
const express = require('express')
const app = express()
const port = 3000

// (async () => {
//     repeatably(30000)
// })();

app.listen(port, () => {
    // repeatably(30000)
})

app.get('/', async (req, res) => {
    repeatably(30000)
    res.sendStatus(200)
})

async function repeatably(interval) {
    console.log('repeating', new Date())
    setTimeout(async () => {
        await tweet()
        await repeatably()
    }, interval)
}

async function tweet() {
    const browser = await chromium.puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36');

    await page.goto('http://twitter.com/');
    await page.waitForSelector('[href="/login"]');
    await page.click('[href="/login"]');
    await page.waitForSelector('[name="text"]');
    await page.type('[name="text"]', 'liemgioktian18', { delay: 30 })
    await page.click('[role="button"]:nth-child(6)')
    await page.waitForSelector('[name="password"]')
    await page.type('[name="password"]', 'x123123x', { delay: 30 })
    await page.click('[data-testid="LoginForm_Login_Button"]')
    await page.waitForSelector('[data-offset-key].public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
    await page.click('[data-offset-key].public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
    await page.type('[data-offset-key].public-DraftStyleDefault-block.public-DraftStyleDefault-ltr', 'im da ' + new Date(), { delay: 30 })
    await page.click('[data-testid="tweetButtonInline"]')
    await browser.close()
}