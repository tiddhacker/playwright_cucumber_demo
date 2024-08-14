const{expect}=require('@playwright/test');
require('dotenv').config({path: `${process.cwd()}/config/.env.${process.env.env}`});

class CommonWebActions{
    async enterValues(page,locator,value){
        this.page=page;
        this.locator=locator;
        await this.page.locator(this.locator).fill(value);
        console.log("Entered value: ["+value+"]");
    }

    async waitForElementToBeVisible(page,locator){
        this.page=page;
        this.locator=locator;
        await expect(this.page.locator(this.locator)).toBeVisible({timeout:Number(process.env.timeout)});
        console.log("Element is visible: ["+this.locator+"]");
    }

    async waitForNetworkIdle(page){
        this.page=page;
        await this.page.waitForLoadState('networkidle',{timeout:Number(process.env.timeout)});
        console.log["Network state idle..!"]
    }

    async click(page,locator){
        this.page=page;
        this.locator=locator;
        await this.page.locator(this.locator).waitFor({timeout:Number(process.env.timeout)});
        await this.page.locator(this.locator).click();
        console.log("Click success on element: ["+this.locator+"]");
    }

    async selectFromListEquals(page,locator,value){
        this.locator=locator;
        this.page=page;
        this.value=value;
        
        await this.page.locator(this.locator).nth(1).waitFor({timeout:Number(process.env.timeout)});
        const dropdownElements = await this.page.$$(this.locator);

        for(const options of dropdownElements){
            let option= await options.textContent();
            if(option.includes(this.value)){
                console.log("Found ["+this.value+"] in dropdown element ["+this.locator+"]");
                await options.click();
                console.log("Successfully selected from dropdown: ["+option+"]");
                break;
            }
        }
    }

    async pauseExecution(duration){
        await this.page.waitForTimeout(duration);
        console.log("Execution paused for ["+duration/1000+"] seconds...");
    }

}
module.exports={CommonWebActions}