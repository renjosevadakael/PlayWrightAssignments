/**
 *  Navigate to https://leafground.com/checkbox.xhtml 
2. Click on the "Basic Checkbox.” 
3. Click on the "Notification Checkbox." 
4. Verify that the expected message is displayed. 
5. Click on your favorite language (assuming it's related to checkboxes). 
6. Click on the "Tri-State Checkbox." 
7. Verify which tri-state option has been chosen. 
8. Click on the "Toggle Switch." 
9. Verify that the expected message is displayed. 
10. Verify if the Checkbox is disabled. 
11. Select multiple options on the page (details may be needed). 
12. Perform any additional actions or verifications required. 
13. Close the web browser when done.
 * 
 * 
 */

import {  expect , test } from "playwright/test";

test(` Test Checkbox functionalities` , async ({page}) => {

    page.goto("https://leafground.com/checkbox.xhtml ");
    //Click on the "Basic Checkbox.” 
    await page.locator("//span[text()='Basic']/parent::div/div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']").click();
    //Click on the "Notification Checkbox." 
    //Verify that the expected message is displayed. 
     await page.locator("//span[text()='Ajax']/parent::div/div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']").click();
     const messageElement = page.locator("//span[text()='Checked']");
     await expect(messageElement).toContainText(`Checked`);
    await page.waitForTimeout(3000)
    //Click on your favorite language (assuming it's related to checkboxes). 
    await page.locator("//label[text()='Java']/preceding-sibling::div").click();
    await page.locator("//label[text()='Javascript']/preceding-sibling::div").click();
    //table[@class='ui-selectmanycheckbox ui-widget']//tr/td[3]
    //Click on the "Tri-State Checkbox." 
    // Verify which tri-state option has been chosen. 
   await page.waitForTimeout(6000)
    await page.locator("//h5[text()='Tri State Checkbox']/following-sibling::div/div/div[@class='ui-chkbox ui-widget']").click()
    
    const messageTitle = await page.locator(`//div[@class="ui-growl-message"]/span[@class="ui-growl-title"]`).innerText(); 
    console.log(messageTitle)
    expect(messageTitle).toBe('State has been changed.'); 
    await page.waitForTimeout(6000)
    //Click on the "Toggle Switch." 
    //Verify that the expected message is displayed.
    await page.locator("//h5[text()='Toggle Switch']/following-sibling::div").click();
    const messageChecked =  page.locator("//span[text()='Checked']");
    expect(messageChecked).toContainText('Checked'); 

    //Verify if the Checkbox is disabled. 
    //Select multiple options on the page (details may be needed). 
    //Perform any additional actions or verifications required. 
    //Close the web browser when done.
    const disabledCheckbox= page.locator("//span[text()='Disabled']/parent::div/div[@class='ui-helper-hidden-accessible']/input");
    expect(disabledCheckbox).toBeDisabled();

    await page.locator("//div[@class='ui-selectcheckboxmenu-trigger ui-state-default ui-corner-right']").click();
    await page.locator("//li[@data-item-value='Miami']//div[@class='ui-chkbox ui-widget']").click();
    await page.locator("//li[@data-item-value='London']//div[@class='ui-chkbox ui-widget']").click();
    await page.locator("//li[@data-item-value='Istanbul']//div[@class='ui-chkbox ui-widget']").click();

}) 