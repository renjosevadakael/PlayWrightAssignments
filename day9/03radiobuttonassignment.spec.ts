/**
 *  Navigate to https://leafground.com/radio.xhtml 
2. Identify and assert the default selected radio button. 
3. Click your most favorite browser and assert that the browser is enabled. 
4. Click one of the cities. 
5. Select the age group. Assert the default selected button.
 * 
 */

import {  expect , test } from "playwright/test";

test(` Test Radio Button functionalities` , async ({page}) => { 
page.goto("https://leafground.com/radio.xhtml");
const defaultSelRadioBtn= page.locator("//h5[text()='Find the default select radio button']/following-sibling::div//label[text()='Safari']")
await expect(defaultSelRadioBtn).toContainText(`Safari`);
// Qn- How to locate this easier - with filter?

await page.locator("//h5[text()='Your most favorite browser']/parent::div//label[text()='Chrome']/preceding-sibling::div//div[@class='ui-radiobutton-box ui-widget ui-corner-all ui-state-default']").click();

//Click one of the cities. 
await page.locator("//label[text()='Chennai']/preceding-sibling::div").click();

await page.locator("//label[text()='1-20 Years']/preceding-sibling::div/div[@class='ui-radiobutton-box ui-widget ui-corner-all ui-state-default']").click();
// Qn How to Select the age group. Assert the default selected button.?
//const ageRadioBtn= page.locator("//label[text()='1-20 Years']/preceding-sibling::div/div[@class='ui-radiobutton-box ui-widget ui-corner-all ui-state-default ui-state-active']");


//const isChecked = await ageRadioBtn.isChecked(); 
//console.log(isChecked)
//console.log('Radio button is checked:', isChecked); 
//expect(isChecked).toBe(true);
 
}
    

)