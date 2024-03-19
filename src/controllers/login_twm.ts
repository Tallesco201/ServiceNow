const puppeteer = require('puppeteer');
require('dotenv').config();


const email =process.env.EMAILTWM
const senha = process.env.SENHATWM

export const LoginTwm = async () => {
    const browser = await puppeteer.launch({headless: false,
        executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'
    });

    const page = await browser.newPage();
    await page.goto();

}