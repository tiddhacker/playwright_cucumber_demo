const{POManager}=require('../../common/POManager');
const {Given, When, Then, And}= require('@cucumber/cucumber')

Given('I navigate to dashboard of application',async function () {
    console.log("in step def");
    const poManager= new POManager(this.page);
    const registrationPage= poManager.getRegistrationPage();
    await registrationPage.isLoaded(this.page);
    this.log("Page is loaded..");  // this will be added in report

  });

Then('I fill the Registeration form', async function () {
    const poManager= new POManager(this.page);
    const registrationPage= poManager.getRegistrationPage();
    await registrationPage.fillRegForm();
  });

