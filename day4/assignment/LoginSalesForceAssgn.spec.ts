import { chromium, test } from "@playwright/test";

test("Log in to Salesforce", async () => {
    
    // create browser instance
    const browser= await chromium.launch({headless: false, channel: 'chrome'});

    // create browser context   
    const context= await browser.newContext();

    // create page
    const page= await context.newPage();

    // Go to URL
    const pageName= await page.goto('https://login.salesforce.com/')

    
    // Enter Username
    await page.getByLabel('Username').fill('renju.joseph.jose@gmail.com')
    // Enter password
    await page.locator('#password').fill('Vadakael2015')
 
 // Find Login element by XPath and click it 
 const loginButton =  page.locator('//*[@id="Login"]'); 
 await loginButton.click();

    // wait for 10 sec
    await page.waitForTimeout(10000);

    //Print the page title and the current url of the page 
    // Get the url of the page

    const url = page.url();
    console.log(`The url of the page is ${url}`);


    // Get the title of the page
        console.log(`The title of the page is ${ await page.title()}`);

    //Close Browser -Teardown


    // Close the page
    await page.close();

    //Close the browser context
    await context.close();

    // Close the browser
    await browser.close();

})