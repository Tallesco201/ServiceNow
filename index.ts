import puppeteer from 'puppeteer';
import { Login } from './login';
const fs = require('fs').promises;


(async () =>{
      const browser = await puppeteer.launch({headless: false,
        executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'
      });
        const page = await browser.newPage();

        const cookiesString = await fs.readFile("./cookies.json")
        const cookies = JSON.parse(cookiesString);
        await page.setCookie(...cookies);


        await page.goto('https://mail.google.com/mail/u/0/#inbox'); 

       
        
})();