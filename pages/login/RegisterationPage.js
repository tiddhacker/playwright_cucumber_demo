const{page,expect}=require('@playwright/test');
const { POManager } = require('../../common/POManager');
const { CommonWebActions } = require('../../utils/CommonWebActions');
require('dotenv').config({path: `${process.cwd()}/config/.env.${process.env.env}`});

class RegisterationPage extends CommonWebActions{

    commonWebActions=new CommonWebActions();

    constructor(page){
        super();
        //define all page locators
        this.page=page;
        this.pageHeader=page.locator("//h2[text()='Register']");
        this.firstName=page.locator("//input[@placeholder='First Name']");
    }

    async isLoaded(){
        //these 3 lines to be added in every page
        await this.commonWebActions.waitForNetworkIdle(this.page);
        await this.commonWebActions.waitForElementToBeVisible(this.pageHeader);
        console.log("RegisterationPage is loaded..!");
        // await this.commonWebActions.selectFromDropdown(this.page,this.firstName);
        
    }

    async fillRegForm(){
        await this.commonWebActions.enterValues(this.firstName,"Sounak");
    }
}
module.exports={RegisterationPage}