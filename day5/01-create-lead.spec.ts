import { test } from "@playwright/test";

// How to enable UI for page fixture usage

test(`Test to create a Lead`, async ({page}) => {

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

   // Click Create Lead

   await page.locator("//a[text()='Create Lead']").click();

   // Enter Company Name

   const companyName= page.locator("#createLeadForm_companyName");
   await companyName.fill("MyCompany")

   // Enter First Name
   await page.locator("#createLeadForm_firstName").fill('Renju');
    await page.waitForTimeout(2000)
   // Enter Last Name
   await page.locator("#createLeadForm_lastName").fill('Jose')
   await page.waitForTimeout(2000)

   // Enter Salutation
   await page.locator('#createLeadForm_personalTitle').fill('Mr.')

   // Enter Title
   await page.locator('#createLeadForm_generalProfTitle').fill('TL')

   //Enter Annual Revenue
    await page.locator('#createLeadForm_annualRevenue').fill('100000')

    //Enter Dept
    await page.locator('#createLeadForm_departmentName').fill('CS')

    //Enter Phone Num
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('7777199993')
   // Click Create Lead

   await page.locator("input[class='smallSubmit']").click();
   await page.waitForTimeout(2000)
   // Check Status

   console.log(`Status of Create Lead is ${await page.locator("#viewLead_statusId_sp").innerText()}`)
   await page.waitForTimeout(2000)
})