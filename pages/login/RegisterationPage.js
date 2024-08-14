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
        this.pageHeader="//h2[text()='Register']";
        this.firstName="//input[@placeholder='First Name']";
        this.selectCountryDropdownBtn="//span[@aria-labelledby='select2-country-container']";
        this.selectCountryDropdownList="//ul[@id='select2-country-results']/li";

    }

    async isLoaded(page){
        //these 3 lines to be added in every page
        this.page=page;
        await this.commonWebActions.waitForNetworkIdle(this.page);
        await this.commonWebActions.waitForElementToBeVisible(this.page,this.pageHeader);
        console.log("RegisterationPage is loaded..!");
        
    }

    async fillRegForm(){
        await this.commonWebActions.enterValues(this.page,this.firstName,"Sounak");
        await this.commonWebActions.click(this.page,this.selectCountryDropdownBtn);
        await this.commonWebActions.selectFromListEquals(this.page,this.selectCountryDropdownList,"Denmark");
    }
}
module.exports={RegisterationPage}