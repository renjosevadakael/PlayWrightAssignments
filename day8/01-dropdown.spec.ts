/*Assignment Requirements: 
1. Navigate to http://leaftaps.com/opentaps/control/main 
2. Enter the username and password 
3. Click Login 
4. Click CRM/SFA 
5. Click Leads 
6. Click Create Leads 
7. Fill all the mandatory fields such as Company name, First name and Last name 
8. Select Direct Mail from the Source dropdown using label 
9. Select Demo Marketing Campaign from the Marketing Campaign dropdown using value  
10. Get the count and print all the values in the Marketing Campaign dropdown 
11. Select General Services from the Industry dropdown using index  
12. Select INR from the Preferred Currency dropdown 
13. Select India from the Country dropdown 
14. Select any state from the State dropdown  
15. Get the count of all states */

import { test } from "@playwright/test";

// How to enable UI for page fixture usage

test(`Handling Drop Down using Select tag`, async ({page}) => {

   // Load the url
   await page.goto("http://leaftaps.com/opentaps/control/main");
   // Enter username
      await page.getByLabel('Username').fill('demosalesmanager')
   // Enter password
   await page.locator('#password').fill('crmsfa')
   // Resuable elements
   const userName=page.locator(".decorativeSubmit")
   // Click on login
  await userName.click()
  // Click CRM/SFA (legacy text)
  await page.locator("text=CRM/SFA").click();
// Click leads
await page.locator("//a[text()='Leads']").click();
// Click Create Lead
await page.locator("//a[text()='Create Lead']").click();
// Enter Company Name
const companyName= page.locator("#createLeadForm_companyName");
await companyName.fill("MyCompany")
// Enter First Name
await page.locator("#createLeadForm_firstName").fill('Renju');
// Enter Last Name
await page.locator("#createLeadForm_lastName").fill('Jose')
// Select source drop down
// Locate by value
await page.selectOption('#createLeadForm_dataSourceId',{label:'Direct Mail'});
await page.waitForTimeout(3000);

// Demo Marketing Campaign Select // Locate by value

await page.selectOption('#createLeadForm_marketingCampaignId',{value:'DEMO_MKTG_CAMP'})
// to get the values in drop down
const dropDown = page.locator('#createLeadForm_marketingCampaignId>option')
const dropDownCount= await dropDown.count();
console.log(`the number of values present in Demo Marketing Campaign Select  ${dropDownCount}`)
await page.waitForTimeout(3000);
for (let index = 0; index < dropDownCount; index++) {
    console.log(await dropDown.nth(index).innerText())
    
}
// Select Industry General Services from the Industry dropdown using index
await page.selectOption('#createLeadForm_industryEnumId',{index: 6});
await page.waitForTimeout(3000);
// Currency drop down by index
await page.selectOption('#createLeadForm_currencyUomId',{index: 42});
await page.waitForTimeout(3000);
// Select country drop down by label
await page.selectOption('#createLeadForm_generalCountryGeoId',{label: 'India'}); 
await page.waitForTimeout(3000);
// Select State/province  drop down by label
await page.selectOption('#createLeadForm_generalStateProvinceGeoId',{label: 'KERALA'}); 
await page.waitForTimeout(3000);

const dropDownState = page.locator('#createLeadForm_generalStateProvinceGeoId>option')
const dropDownCountState= await dropDownState.count();
console.log(`the number of States present ${dropDownCountState}`)
await page.waitForTimeout(3000);
for (let index = 0; index < dropDownCountState; index++) {
    console.log(await dropDownState.nth(index).innerText())
    
}

await page.locator("input[class='smallSubmit']").click();
console.log(`Status of Create Lead is ${await page.locator("#viewLead_statusId_sp").innerText()}`)
await page.waitForTimeout(2000)
}) 

