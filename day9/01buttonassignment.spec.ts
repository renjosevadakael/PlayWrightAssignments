
/*Assignment Requirements: 
1. Navigate to https://leafground.com/button.xhtml 
2. Write a script to click the button and confirm a title change or any visible response. 
3. Assert the disabled state of a button. 
4. Click the Image button and click on any hidden button 
5. Check how many rounded buttons are present */

import {  test , expect } from "playwright/test";

test (` Test to explore button functionalities`, async ({page}) => {

    await page.goto("https://leafground.com/button.xhtml");
    //click the button and confirm a title change or any visible response
    const beforeClickTitle= await page.title()
    expect(beforeClickTitle).toEqual('Button');
    await page.locator("//span[contains(text(),'Click')]").click();
    await page.waitForTimeout(1000)
    const afterClickTitle= await page.title()
    expect(afterClickTitle).toEqual('Dashboard');
    await page.waitForTimeout(1000)
    //Assert the disabled state of a button. 
    page.goBack();
    await page.waitForTimeout(1000)
    const disabledBtn =page.locator("//span[contains(text(),'Disabled')]/parent::button");
    expect(disabledBtn).toBeDisabled();
    //Click the Image button and click on any hidden button
    const imageBtn =page.locator("//span[contains(text(),'Image')]/parent::button");
    await imageBtn.click()
    const hiddenElement= page.locator("//div[@class='ui-overlaypanel-content']/img");
    expect(hiddenElement).toBeVisible();
    //Check how many rounded buttons are present 
    const roundBtnCount = await page.locator("//h5[text()='How many rounded buttons are there?']/parent::div/button").count()
    expect(roundBtnCount).toEqual(4)
})