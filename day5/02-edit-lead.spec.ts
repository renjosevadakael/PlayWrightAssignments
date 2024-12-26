/**
 * Assignment: 2 Edit a Lead 
1. Navigate to the url http://leaftaps.com/opentaps/control/main 
2. Enter the username as ‘Demosalesmanager’ 
3. Enter the password as ‘crmsfa’ 
4. Click the Login button 
5. Click CRM/SFA 
6. Click Leads 
7. Click Find Leads 
8. Enter the first name 
9. Click Find Leads button 
10. Click the first resulting Lead ID 
11. Click Edit 
12. Edit Company name 
13. Edit Annual Revenue 
14. Edit Department 
15. Enter Description 
16. Click Update 
17. Verify the edited fields and print the title of the page 
 * 
 * 
 */



import { test ,expect} from "@playwright/test";

// How to enable UI for page fixture usage
test(`test to edit lead`, async ({page}) => {

    // Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");
    // Enter username
    //await page.locator('#username').fill('demosalesmanager')
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

   // Click Find Lead

   await page.locator("//a[text()='Find Leads']").click();
    // Enter first Name
   await page.locator("(//label[text()='First name:'])[3]").fill('renju')

   //Click Find Leads button 

   await page.locator("//button[text()='Find Leads']").click();
    //  Click the first resulting Lead ID 
   await page.locator("//a[text()='10379']").click();

  //Click Edit 
  await page.locator("//a[text()='Edit']").click();
  
  
// Edit Company name 

const companyName= page.locator("#updateLeadForm_companyName");
   await companyName.fill("MyCompanyUpdated")
// Edit Annual Revenue 
await page.locator('#updateLeadForm_annualRevenue').fill('200000')

// Edit Department 
await page.locator('#updateLeadForm_departmentName').fill('CSE')
// Enter Description 
await page.locator('#updateLeadForm_description').fill('DQ')

// Click Update 

await page.locator("input[value='Update']").click();
// Verify the edited fields and print the title of the page */
const myCompValue = await page.locator("#viewLead_companyName_sp").textContent(); 
console.log(`Company Name: ${myCompValue}`); 
expect(myCompValue).toContain('MyCompanyUpdated');


const mydeptValue = await page.locator("#viewLead_departmentName_sp").textContent(); 
console.log(`Company Name: ${mydeptValue}`); 
expect(mydeptValue).toContain('CSE');


const myannRev = await page.locator("#viewLead_annualRevenue_sp").textContent(); 
console.log(`Company Name: ${myannRev}`); 
expect(myannRev).toContain('$200,000.00');
//Title of page

const pageTitle = await page.title(); 
console.log(`Page Title: ${pageTitle}`);
    
await page.waitForTimeout(5000);
})