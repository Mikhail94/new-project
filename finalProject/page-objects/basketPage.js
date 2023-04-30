const TopNavigation = require('../page-objects/pageComponents/topNavigation');
const LogIn = require('../page-objects/logIn');

class BasketPage {
    constructor(page) {
        this.page = page;
        this.topNavigation = new TopNavigation (page);
        this.logIn = new LogIn (page);
        this.itemCheckBox = `(//*[@class = 'i-checkbox i-checkbox_large'])[1]`; 
        this.deleteItemButton = `//*[contains(text(),'Удалить')]//ancestor::*[@class='i-button i-button_danger i-button_small remove']`;  
        this.yesDeleteItemButton = '.remove-yes';   
        this.noItemsInBasketLocator = `.i-textual__plain_arrow`;
    }

    async removeItemFromBasket (logInText, passwordText) { 
        await this.logIn.logIn(logInText, passwordText)
        await this.page.click(this.topNavigation.basketButton)
        await this.page.check(this.itemCheckBox)
        await this.page.click(this.deleteItemButton)
        await this.page.click(this.yesDeleteItemButton)
    }
}
module.exports = BasketPage;
