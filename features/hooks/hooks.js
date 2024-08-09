const { Before, After, BeforeAll } = require("@cucumber/cucumber");
const playwright = require("@playwright/test");
const webDriverHandler =  require('../../common/webDriverHandler');
const { env } = require("process");
const path = require("path");
require('dotenv').config({path: `${process.cwd()}/config/.env.${process.env.env}`});

Before({tags: "@UI"},async function (){
    console.log("Inside before UI");
    console.log(process.env.env);
    

    //to get cli arguments- process.env.browser

    const browser=await webDriverHandler.browser(process.env.browser);
    const context= await browser.newContext();
    page= await context.newPage();
    await page.goto(process.env.URL); //reading from .env file in root directory
    
})

After(async function() {
    console.log("Inside After method");
})