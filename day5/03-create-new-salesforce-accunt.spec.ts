import {test,expect} from "playwright/test"
import {faker} from "@faker-js/faker"
test(' Test to create new salesforce account', async({page}) =>{
    //Navigate to the url https://login.salesforce.com/
 // Load the url
 await page.goto("https://login.salesforce.com/");
 // Enter username using getByLabel 
 // Enter password using getByLabel 
 // Click Login 

await page.getByLabel('Username').fill('renju.joseph.jose@gmail.com')
await page.getByLabel('Password').fill('Vadakael2015')
const loginButton =  page.locator('//*[@id="Login"]'); 
await loginButton.click();
//5. Verify the title and url of the page using appropriate assertions 
const url = page.url();
console.log(`The url of the page is ${url}`);
console.log(`The title of the page is ${ await page.title()}`);
const title = await page.title();
expect(url).toBe(page.url());

//6. Click App Launcher using the class locator 
const appLaunch=page.locator(".slds-icon-waffle")
    // Click on login
   await appLaunch.click()
   await page.waitForTimeout(10000);
//7. Click View All using getByText 
await page.getByText('View All').click()
await page.waitForTimeout(2000);
//8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
await page.getByPlaceholder('Search apps or items...').fill('Service');
//Click Service using index based XPath 
await page.locator("(//div[@class='slds-app-launcher__tile-body slds-truncate'])[1]").click();
//Click Accounts using attribute based CSS selector 
await page.locator("//span[text()='Accounts']").click();
//Click New using getByRole (to fix)
await page.getByRole('button', { name: 'New' }).click();
//Enter Account name using attribute based CSS selector

let accName = faker.finance.accountName();
await page.locator('input.slds-input[name="Name"]').fill(accName);

// Click Save button using XPath 

await page.locator("//button[@class='slds-button slds-button_brand' and @name='SaveEdit' and text()='Save']").click();

//Verify the toast message displayed
// Assert the toast message

const toastMessageElement = page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']");
const toastMessageElement1 = page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText;  
//console.log(`${toastMessageElement1}`)
await expect(toastMessageElement).toContainText(`Account "${accName}" was created.`);





})

    



