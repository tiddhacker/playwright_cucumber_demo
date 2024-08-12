const{expect}=require('@playwright/test');
const { threadId } = require('worker_threads');
require('dotenv').config({path: `${process.cwd()}/config/.env.${process.env.env}`});

class CommonWebActions{
    async enterValues(locator,value){
        console.log("Entering value: ["+value+"]");
        this.locator=locator;
        await this.locator.fill(value);
    }

    async waitForElementToBeVisible(locator){
        this.locator=locator;
        await expect(this.locator).toBeVisible({timeout:Number(process.env.timeout)});
    }

    async waitForNetworkIdle(page){
        this.page=page;
        await this.page.waitForLoadState('networkidle',{timeout:Number(process.env.timeout)});
    }
}
module.exports={CommonWebActions}