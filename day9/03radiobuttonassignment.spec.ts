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
// Qn- How to locate this easier - with filter? - done with locator and filters
//const defaultSelRadioBtn= page.locator("//h5[text()='Find the default select radio button']/following-sibling::div//label[text()='Safari']")
const selectDefaultRadioBtn=  page.locator(".card").filter({hasText : "Find the default select radio button"});
const browserSelected= selectDefaultRadioBtn.locator("//label[text()='Safari']/preceding::input[1]")
await expect( browserSelected).toBeChecked();
const safari = selectDefaultRadioBtn.locator("//label[text()='Safari']");
await expect(safari).toContainText(`Safari`);

//Click your most favorite browser and assert that the browser is enabled.
//await page.locator("//h5[text()='Your most favorite browser']/parent::div//label[text()='Chrome']/preceding-sibling::div//div[@class='ui-radiobutton-box ui-widget ui-corner-all ui-state-default']").click();
const favBrowserRadioBtn= page.locator(".card").filter({hasText: "Your most favorite browser"});
await favBrowserRadioBtn.locator("//label[text()='Chrome']/preceding::div[1]").click();
const favBroswerSelected = favBrowserRadioBtn.locator("//label[text()='Chrome']/preceding::input[1]");
await expect(favBroswerSelected).toBeChecked();

//Click one of the cities. 
await page.locator("//label[text()='Chennai']/preceding-sibling::div").click();
// Qn How to Select the age group. Assert the default selected button.?
// 1. Assert the default selected button, then select a different age group and again assert it
const selectDefaultAgeGrpRadioBtn= page.locator(".card").filter({hasText :"Select the age group (only if not selected)"});
const  ageGroupSelected = selectDefaultAgeGrpRadioBtn.locator("//label[text()='21-40 Years']/preceding::input[1]")
await expect(ageGroupSelected).toBeChecked();
await selectDefaultAgeGrpRadioBtn.locator("//label[text()='1-20 Years']/preceding::div[1]").click();
const  newAgeGroupSelected = selectDefaultAgeGrpRadioBtn.locator("//label[text()='1-20 Years']/preceding::input[1]");
await expect(newAgeGroupSelected).toBeChecked();


//await page.locator("//label[text()='1-20 Years']/preceding-sibling::div/div[@class='ui-radiobutton-box ui-widget ui-corner-all ui-state-default']").click();

//const ageRadioBtn= page.locator("//label[text()='1-20 Years']/preceding-sibling::div/div[@class='ui-radiobutton-box ui-widget ui-corner-all ui-state-default ui-state-active']");


//const isChecked = await ageRadioBtn.isChecked(); 
//console.log(isChecked)
//console.log('Radio button is checked:', isChecked); 
//expect(isChecked).toBe(true);
// Shift+Alt+a = Block Comment 
}
    

)