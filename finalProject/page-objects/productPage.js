const MainPage = require('../page-objects/mainPage');
const TopNavigation = require('../page-objects/pageComponents/topNavigation');
const LogIn = require('../page-objects/logIn');

class ProductPage {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage (page);
        this.topNavigation = new TopNavigation (page);
        this.logIn = new LogIn (page); 
        this.putToBasketButton = `//*[@class = 'b-product-control__button i-button i-button_large i-button_orange addtocart-btn first-button']`; 
        this.productTitle = `.b-product-title__heading` 
        this.putToFavouriteButton = `(//*[@class='i-button-group'])[1]` 
        this.addReviewButton = `.b-comment-new__state-btn` 
        this.enterReviewField = `.b-comment-new__tab_review .b-comment-new__text-container` 
        this.sendReviewButton = `.b-comment-new__tab_review .b-comment-new__row_footer-indents .b-comment-new__control` 
        this.firstRevewInTheList = `//*[@class= 'rm-review b-comment'][1]//*[@class='b-comment__body']/p` 
    }
    
    async putItemToBasket (logInText, passwordText) {   
        await this.logIn.logIn (logInText, passwordText)
        await this.page.click(this.mainPage.firstItem)
        await this.page.click(this.putToBasketButton)
        await this.page.waitForSelector(this.topNavigation.basketAmountLocator)
    }

    async putProductToFavourite (logInText, passwordText) {  
        await this.logIn.logIn(logInText, passwordText)
        await this.page.click(this.mainPage.firstItem)
        await this.page.click(this.putToFavouriteButton)
    }

    async addReview (logInText, passwordText, numberOfSection, numberOfItem, reviewText) {
        await this.logIn.logIn(logInText, passwordText)
        await this.page.click(await this.mainPage.itemOntheMainPage (numberOfSection, numberOfItem))
        await this.page.click(this.addReviewButton)     
        await this.page.type(this.enterReviewField, reviewText, {delay: 10})
        await this.page.click(this.sendReviewButton)
        const bodyOfTheReview = await this.page.textContent(this.firstRevewInTheList)
        return bodyOfTheReview
    }
}
module.exports = ProductPage;