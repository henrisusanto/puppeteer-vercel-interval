const puppeteer = require('puppeteer');

(async () => {
    repeatably(30000)
})();

function repeatably(interval) {
    console.log('repeating', new Date())
    setTimeout(async () => {
        await tweet()
        repeatably()
    }, interval)
}

async function tweet() {
    const browser = await puppeteer.launch({ headless: true });
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