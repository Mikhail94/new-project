const MainPage = require('../page-objects/mainPage');
const TopNavigation = require('../page-objects/pageComponents/topNavigation');
const LogIn = require('../page-objects/logIn');

class ProductPage {
    constructor(page) {
        this.page = page;    /// пробрасываем страницу на которую пойдем
        this.mainPage = new MainPage (page);
        this.topNavigation = new TopNavigation (page);
        this.logIn = new LogIn (page); 
        this.putToBasketButton = `//*[@class = 'b-product-control__button i-button i-button_large i-button_orange addtocart-btn first-button']`; /// локатор кнопки "Добавить в корзину"
        this.productTitle = `.b-product-title__heading`     /// название продукта
        this.putToFavouriteButton = `(//*[@class='i-button-group'])[1]` /// локатор кнопки "добавить в избранное"
    }

    async putItemToBasket (logInText, passwordText) {      /// функция которая положит товар в корзину. если мы не залогинены
        await this.logIn.logIn (logInText, passwordText)
        await this.page.click(this.mainPage.firstItem)
        await this.page.click(this.putToBasketButton)
        await this.page.waitForSelector(this.topNavigation.basketAmountLocator)
    }



    async putProductToFavourite (logInText, passwordText) {     /// функция которая положит товар в избранное
        await this.logIn.logIn(logInText, passwordText)
        await this.page.click(this.mainPage.firstItem)
        await this.page.click(this.putToFavouriteButton)

    }



   }

   module.exports = ProductPage;