const { Before, After} = require("@cucumber/cucumber");
const playwright = require("@playwright/test");
const webDriverHandler =  require('../../common/webDriverHandler');
const { env } = require("process");
const path = require("path");
require('dotenv').config({path: `${process.cwd()}/config/.env.${process.env.env}`});
const{POManager}=require('../../common/POManager');

Before({tags: "@UI",timeout: 30 * 1000},async function (){
    console.log("Inside before UI");
    console.log(process.env.env);

    //to get cli arguments- process.env.browser
    const browser=await webDriverHandler.getBrowser(process.env.browser);
    this.context= await browser.newContext();
    this.page= await this.context.newPage();
    await this.page.goto(process.env.URL); //reading from .env file in root directory
    poManager=new POManager(this.page);
})

After(async function(scenario) {
    console.log("Inside After method");
    if(scenario.result.status=="FAILED"){
        console.log("Attaching screenshot to report")
        const img=await this.page.screenshot({
            path:`${process.cwd()}/reports/${scenario.pickle.name}.png`
        });
        this.attach(img,'image/png');
    }
    await this.page.close();
    await this.context.close();
})