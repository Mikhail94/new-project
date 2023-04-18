const MainPage = require('./mainPage');
const TopNavigation = require('../page-objects/pageComponents/topNavigation');
const LogIn = require('../page-objects/logIn');

class FavouritePage {
    constructor(page) {
        this.page = page;    /// пробрасываем страницу на которую пойдем 
        this.mainPage = new MainPage (page);
        this.topNavigation = new TopNavigation (page);
        this.logIn = new LogIn (page);
        this.productOnFavouritePage = `(//*[@class = 'item-type-card item-type-card--controls'])[1]`
        this.deleteProductFromFavouriteButton = `(//*[@class='item-type-card__controls-trigger'])[1]`     /// кнопка в правом углу которая удаляет товар 
        this.approveDeleteButton = `(//*[@class = 'item-type-card__controls-button'])[1]`   /// кнопка для подтверждения удаления продукта из избранного

    }




async removeProductFromFavourite (logInText, passwordText) {
    await this.logIn.logIn(logInText, passwordText)
    await this.page.click(this.topNavigation.favouriteAmountLocator);
    await this.page.hover(this.productOnFavouritePage);
    await this.navigateToCordinats (this.productOnFavouritePage)
    await this.page.waitForSelector(this.deleteProductFromFavouriteButton);
    await this.page.click(this.deleteProductFromFavouriteButton)
    await this.page.click(this.approveDeleteButton)

}

async navigateToCordinats (navigateToElement)  {         /// навигация на определенный объект 
    const element = await this.page.$(navigateToElement);
    const boundingBox = await element.boundingBox();
    const x = boundingBox.x + boundingBox.width;
    const y = boundingBox.y;
    await this.page.mouse.move(x, y);


}





}

    module.exports = FavouritePage;      /// экспортируем класс
