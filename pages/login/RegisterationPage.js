const{page,expect}=require('@playwright/test');

class RegisterationPage{
    constructor(page){
        //define all page locators
        this.page=page;
        this.pageHeader=page.locator("//h2[text()='Register']");
        this.firstName=page.locator("//input[@placeholder='First Name']");
    }

    async isLoaded(page){
        //these 3 lines to be added in every page
        
        await this.page.waitForLoadState('networkidle');
        await expect(this.pageHeader).toBeVisible();
        console.log("RegisterationPage is loaded..!");
    }
}
module.exports={RegisterationPage}