
const puppeteer = require('puppeteer');
const fs = require('fs').promises;
require('dotenv').config();

const email = process.env.EMAIL;
const password = process.env.SENHA;

export const Login =async () => {
  const browser = await puppeteer.launch({headless: false,
  executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'
});
  const page = await browser.newPage();
  await page.goto('https://login.microsoftonline.com/1236ea7e-8bbc-43a5-a5ee-189a1954e314/saml2?SAMLRequest=fVLJTsMwEL0j8Q%2BW79kKiMpqggpVRSWWqA0cuDnxJHFw7OBxWvh70rQIOMDNen5%2By3hmV%2B%2BtIluwKI2OaeSHlIAujJC6iulTtvSm9Co5PZkhb1XH5r2r9RreekBHhpca2XgR095qZjhKZJq3gMwVbDO%2Fv2MTP2SdNc4URlGyWsS0MoLXr502zWte57VspMhzIUxZ1gCilKrlUDXQUPL8FWuyj7VC7GGl0XHtBiicnHvhmRdOs%2BiSRRG7mL5Qkh6drqU%2BNPgvVn4gIbvNstRLHzfZKLCVAuzDwN5HNZUCvzDt3j7liHI7wCVXCJTMEcG6IeCN0di3YDdgt7KAp%2FVdTGvnOmRBsNvt%2FG%2BZgAfojB7Pfm4DXiBNxtmysZ79MdT%2Fw%2FMvc5r8KT8Lfignxy%2FcN1stUqNk8UHmSpndjQXuhlrO9kOrpbEtd3%2BbR340IlJ45UhlvcYOCllKEJQEycH1964MG%2FQJ&RelayState=https%3A%2F%2Faccounts.google.com%2FCheckCookie%3Fcontinue%3Dhttps%253A%252F%252Faccounts.google.com%252FManageAccount%253Fnc%253D1%26hl%3Dpt-BR%26checkedDomains%3Dyoutube%26checkConnection%3Dyoutube%253A114%26pstMsg%3D1%26flowName%3DGlifWebSignIn%26ifkv%3DATuJsjzN4eHHIuxVK62JBvuCcTDY66WnEWJbIQvx52rJfgX4hDrgwyIfxEqf6Z0lYn3YcEg1UEL_qg%26theme%3Dglif');


  await page.waitForSelector('[name="loginfmt"]', { visible: true });
  await page.type('#i0116', email);
  await page.click('[class="win-button button_primary button ext-button primary ext-primary"] ');
  await page.waitForSelector('[name="passwd"]', { visible: true });
  
  await page.type('[name="passwd"]', password);
  // await page.waitForSelector('#idSIButton9', { visible: true });
  await new Promise(resolve => setTimeout(resolve, 3000));

  await page.keyboard.press('Enter');

/* await page.waitForSelector('#idSIButton9', { visible: true });
 */await new Promise(resolve => setTimeout(resolve, 12000));
   await page.keyboard.press('Enter');
   await new Promise(resolve => setTimeout(resolve, 5000));
   await page.click ('[jsname="V67aGc"]');

   await new Promise(resolve => setTimeout(resolve, 8000)); 
   const cookies = await page.cookies();
   await fs.writeFile('./cookies.json', JSON.stringify(cookies, null, 2));


  


  //   await browser.close();
}







// id="i0116"
// name="loginfmt" #loginfmt-input
//*[@id="idSIButton9"]

/* //botão sim 
idSIButton9

//botão continuar
class="VfPpkd-vQzf8d" */