const{expect}=require('@playwright/test');
const { threadId } = require('worker_threads');

class CommonWebActions{
    async selectFromDropdown(page,locator){
        this.page=page;
        this.locator=locator;
        console.log("in common web actions class");
        await this.locator.fill("ABC");
        await this.page.pause();
    }
}
module.exports={CommonWebActions}