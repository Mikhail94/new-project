const LogIn = require('../page-objects/logIn');

class PersonalSpace {
    constructor(page) {
        this.page = page;
        this.logIn = new LogIn (page);           
        this.quitFromAccountButton = `//*[@class='l-col-3']//*[@class='uc-nav uc-nav-last']//a`;
        this.deliveryAddressesButton = `.l-col-3-i .uc-nav li:nth-child(2)`;
        }
    
        async logOut () { 
            await this.page.click(await this.logIn.accountNumber)
            await this.page.click(await this.quitFromAccountButton)        
        }

}
module.exports = PersonalSpace;