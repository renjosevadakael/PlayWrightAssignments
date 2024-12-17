/***
 * 
 * Test Case Name: Verify Lead Creation and Conversion to Opportunity 
Objective: Ensure that a user can successfully create a new lead and convert that lead to an opportunity. 
User Credentials: 
Username: hari.radhakrishnan@qeagle.com  
Password: Leaf$1234 
Steps & Expected Results: 
1. Step: Launch the browser (Chrome / Edge / Firefox / Safari). 
Expected Result: User should see the respective browser getting launched. 
2. Step: Load the specified URL (https://login.salesforce.com/). 
Expected Result: The Salesforce application’s login window should appear. 
3. Step: Enter the Username, Password and click on the Login button. 
Expected Result: The user should be logged into Salesforce CRM 
4. Step: Click on the App Launcher toggle button. 
Expected Result: A list of apps should appear. 
5. Step: Click on the View All link.  
Expected Result: The link should direct the user to the App Launcher pop up window. 

6. Step: Type ‘Marketing’ in the search box and click on the Marketing link. 
Expected Result: The link should direct the user to Marketing dashboard page.  


7. Step: Navigate to the Leads tab from the Marketing dashboard. 
Expected Result: User should see a list of existing leads (if any) and options to create a new 
lead. 
8. Step: Click on the New button to create a lead. 
Expected Result: A form to input details for the new lead should appear. 

9. Step: Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid 
data. 
Expected Result: All details should be filled in without any errors. 
10. Step: Click on the Save button. 
Expected Result: A new lead should be created and user should be redirected to the detailed 
view of the newly created lead. A confirmation message should also be displayed and verified. 


11. Step: In the newly created Lead page, locate the dropdown near Submit for Approval button and 
click on the Convert link. 
Expected Result: The Convert link should be visible and clickable and a new dialog should 
appear asking for details about converting the lead to an opportunity, contact, and an account. 

 
12. Step: Click on the Opportunity Name input field, clear and enter a new opportunity name. 
Expected Result: The entered value should appear. 

13. Step: Click on the Convert button. 
Expected Result: The lead should be successfully converted. A confirmation message ‘Your 
lead has been converted’ should be displayed and verified. 


14. Step: Click on the Go to Leads button. 
Expected Result: It should redirect the user to Leads page. 

15. Step: Search the verified lead name in the Search box and verify the text ‘No items to display’. 
Expected Result: The lead should not be displayed as it has been converted to Opportunity and 
should display the confirmation message. 


16. Step: Navigate to the Opportunities tab and search for the opportunity linked with the converted 
lead. 
Expected Result: The newly converted opportunity should appear in the list with all the relevant 
details correctly populated from the lead. 
17. Step: Search the opportunity name created and click on the created opportunity name. 
Expected Result: The created Opportunity Name should appear and verify the same. 
 * 
 * 
 */


import {test,expect} from "playwright/test"
import {faker} from "@faker-js/faker"

test(' Test to Verify Lead Creation and Conversion to Opportunity ', async({page}) =>{
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

//Click App Launcher  
const appLaunch=page.locator(".slds-icon-waffle")
await appLaunch.click()
await page.waitForTimeout(1000);
await page.getByText('View All').click()
//Enter ‘Marketing’ in the App Launcher Search box 
await page.getByPlaceholder('Search apps or items...').fill('Marketing');
//Click ‘Marketing’ using index based XPath 
await page.locator("(//div[@class='slds-app-launcher__tile-body slds-truncate'])[1]").click();

//Click Leads using attribute based CSS selector 
await page.locator("//span[@class='slds-truncate' and text()='Leads']").click();
//Click New using getByRole (to fix)
await page.getByRole('button', { name: 'New' }).click();

// Fill Details in New Page

await page.locator("//button[@name='salutation']//span[text()='--None--']").click()
await page.locator("//span[text()='Mr.']").click();
await page.locator("//input[@placeholder='First Name']").fill('Renju');
await page.locator("//input[@placeholder='Last Name']").fill('Jose');
await page.locator("//input[@name='Company']").fill('MyCompany');
//await page.locator("//button[@aria-label='Lead Status']//span[text()='--None--']").click();
//await page.locator("//span[@class='slds-truncate' and text()='Working - Contacted']").click();

await page.locator("//button[text() ='Save']").click()

// Assert the toast message

const toastMessageElement = page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']");
const toastMessageElement1 = page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText;  
//console.log(`${toastMessageElement1}`)
await expect(toastMessageElement).toContainText('Lead "Mr. Renju Jose" was created');

// Click on dropdown
 await page.locator("//button//span[text()='Show more actions']").click();
 await page.locator("//span[text()='Convert']").click();

 await page.locator("//button[@title='MyCompany-']").click();
 const opportunityName=page.locator("//span[text()='Opportunity Name']/parent::label/following-sibling::input");
await opportunityName.click();
await opportunityName.clear();
let opportunity = faker.commerce.department();
await opportunityName.fill(opportunity);

// Click on Convert Btn

await page.click("//button[text()='Convert']");
// Assert Message
const toastMessageLeadConverted = page.locator("//h2[text()='Your lead has been converted']");
await expect(toastMessageLeadConverted).toContainText('Your lead has been converted');

// Click on Go To Leads
await page.click("//button[text()='Go to Leads']");

await page.getByPlaceholder('Search this list...').fill('Renju');

await page.getByPlaceholder('Search this list...').focus();

await page.keyboard.press('Enter');

// Assert Message
const noItemsDisplayMsg = page.locator("//span[text()='No items to display.']");
await expect(noItemsDisplayMsg).toContainText('No items to display.');

// Navigate to Opportunities Tab

await page.locator("//span[text()='Opportunities']").click();
await page.getByPlaceholder('Search this list...').fill(opportunity);
await page.getByPlaceholder('Search this list...').focus();
await page.keyboard.press('Enter');

//17. Step: Search the opportunity name created and click on the created opportunity name. 
//Expected Result: The created Opportunity Name should appear and verify the same. 
await page.locator(`(//a[@title='${opportunity}'])[1]`).click();
//span[@class='slds-truncate']//slot[text()='Renju Jose']

const verifyOpportunityName = page.locator(`//lightning-formatted-text[text()='${opportunity}']`);
await expect(verifyOpportunityName).toContainText(opportunity);


})