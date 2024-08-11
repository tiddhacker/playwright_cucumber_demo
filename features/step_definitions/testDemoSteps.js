const{POManager}=require('../../common/POManager');

const {Given, When, Then, And}= require('@cucumber/cucumber')

Given('I navigate to dashboard of application',{timeout: 30 * 1000},async function () {
    console.log("in step def");

    this.log("to test if this log is added in report");  // this will be added in report
    const poManager= new POManager(this.page);
    const registrationPage= poManager.getRegistrationPage();
    await registrationPage.isLoaded(this.page);
  });
