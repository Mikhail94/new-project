const Helper = require('../page-objects/helpers/helper');
const TopNavigation = require('../page-objects/pageComponents/topNavigation');
const LogIn = require('../page-objects/logIn');

class FavouritePage {
    constructor(page) {
        this.page = page;
        this.helper = new Helper(page);
        this.topNavigation = new TopNavigation (page);
        this.logIn = new LogIn (page);
        this.productOnFavouritePage = `(//*[@class = 'item-type-card item-type-card--hot item-type-card--controls'])[1]`;
        this.deleteProductFromFavouriteButton = `(//*[@class='item-type-card__controls-trigger'])[1]` ;
        this.approveDeleteButton = `(//*[@class = 'item-type-card__controls-button'])[1]`;
    }

    async removeProductFromFavourite (logInText, passwordText) { 
        await this.logIn.logIn(logInText, passwordText)
        await this.page.click(this.topNavigation.favouriteAmountLocator);
        await this.page.hover(this.productOnFavouritePage);
        await this.helper.navigateToCordinats(this.productOnFavouritePage)
        await this.page.waitForSelector(this.deleteProductFromFavouriteButton);
        await this.page.click(this.deleteProductFromFavouriteButton)
        await this.page.click(this.approveDeleteButton)
    }
}
module.exports = FavouritePage;
