const MainPage = require('./mainPage');
const TopNavigation = require('../page-objects/pageComponents/topNavigation');
const LogIn = require('../page-objects/logIn');

class BasketPage {
    constructor(page) {
        this.page = page;    /// пробрасываем страницу на которую пойдем 
        this.mainPage = new MainPage (page);
        this.topNavigation = new TopNavigation (page);
        this.logIn = new LogIn (page);
        this.itemCheckBox = `(//*[@class = 'i-checkbox i-checkbox_large'])[1]`;     /// чек бокс с выбором товара
        this.deleteItemButton = `//*[contains(text(),'Удалить')]//ancestor::*[@class='i-button i-button_danger i-button_small remove']`;    /// кнопка удаления товара из корзины
        this.yesDeleteItemButton = '.remove-yes';       /// "подтвердить удаление" кнопка
        this.noItemsInBasketLocator = `.i-textual__plain_arrow`;    /// локатор, о том что нету товаров в корзине 
        

    }


    async removeItemFromBasket (logInText, passwordText) {
        await this.logIn.logInCorrect (logInText, passwordText)
        await this.page.click(this.topNavigation.basketButton)
        await this.page.check(this.itemCheckBox)
        await this.page.click(this.deleteItemButton)
        await this.page.click(this.yesDeleteItemButton)
        

    }


    
}

module.exports = BasketPage;      /// экспортируем класс
