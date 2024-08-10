const {RegisterationPage}=require('../pages/login/RegisterationPage');

class POManager{
    constructor(page){
        //all page classes to be initialised here
        this.page=page;
        
        this.registerationPage=new RegisterationPage(this.page);
    }

    getRegistrationPage(){
        return this.registerationPage;
    }
}
module.exports={POManager}