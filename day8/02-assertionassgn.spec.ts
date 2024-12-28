
/*1. Navigate to https://leafground.com/select.xhtml 
2. Select your favorite UI automation tool using the different select options 
3. Get the count and print of all the values 
4. Choose your preferred Country 
5. Confirm Cities belongs to Country is loaded 
6. Choose any three courses from the dropdown 
7. Choose a language and print all the values from the dropdown. 
8. Select 'Two' irrespective of the language chosen*/

import { expect, test } from "@playwright/test";
import { assert } from "node:console";


test(`Test to Home Assignment: Leafground Dropdown`, async ({page}) => {
    await page.goto(`https://leafground.com/select.xhtml`);
    //Select your favorite UI automation tool using the different select options 

   await page.selectOption('select.ui-selectonemenu', { label: 'Playwright'});
   const dropDownAutTools =   page.locator('select.ui-selectonemenu>option')
   const dropDownAutToolsCount= await dropDownAutTools.count();
   console.log(`the number of Tools present ${dropDownAutToolsCount}`)
   // select prefered country
    await page.locator('//*[@id="j_idt87:country"]').click();
    await page.locator("//li[text()='India']").click();
   // Confirm cities belong to Country
   const expectCities=['Bengaluru','Chennai','Delhi']
   await page.locator('//*[@id="j_idt87:city"]').click();
   
   const actualCities= page.locator("//ul[@id='j_idt87:city_items']/li")
   const citiesCount= await actualCities.count()-1;
   console.log(`the number of Cities present ${citiesCount}`)

   for (let index = 1; index <= citiesCount; index++) {
   const city=  await actualCities.nth(index).innerText();
   expect(expectCities).toContain(city)
       }
       /*
 //Choose any three courses from the dropdown 
await page.locator("//*[@id='j_idt87:auto-complete']/button").click();
// Wait for the dropdown to appear and select the option 
await page.click('li[data-item-label="AWS"]')
await page.locator("//*[@id='j_idt87:auto-complete']/button").click();

await page.click('li[data-item-label="Appium"]');
await page.locator("//*[@id='j_idt87:auto-complete']/button").click();
await page.click('li[data-item-label="PostMan"]');*/

//Choose any three courses from the dropdown 
const course = page.locator('//*[@id="j_idt87:auto-complete_panel"]/ul/li')
const courseCount= await course.count();
for (let index = 0; index < 3; index++) {
    await page.locator("//*[@id='j_idt87:auto-complete']/button").click();
    await course.nth(index).click()
}
//Choose a language and print all the values from the dropdown. 
await page.locator('//*[@id="j_idt87:lang"]').click();
await page.locator("//li[text()='Malayalam']").click();

const actualLanguages= page.locator("//ul[@id='j_idt87:lang_items']/li")
   const languagesCount= await actualLanguages.count()-1;
   console.log(`the number of Languages present ${languagesCount}`)
   let languages =[];
   for (let index = 1; index <= languagesCount; index++) {
   const language=  await actualLanguages.nth(index).innerText();
   languages.push(language)
   }
   
   console.log(`Value of languages ${languages}`)

   //Select 'Two' irrespective of the language chosen
   await page.locator('//*[@id="j_idt87:value_label"]').click();
   await page.locator("//li[@id='j_idt87:value_3']").click();
   
}
)

