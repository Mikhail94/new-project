const { test } = require('@playwright/test');
const MainPage = require('../page-objects/mainPage');
const TopNavigation = require('../page-objects/pageComponents/topNavigation');
const LogIn = require('../page-objects/logIn');
const {expect} = require('chai');
const ProductPage = require('../page-objects/productPage');
const TopicProductsPage = require('../page-objects/topicProducts');
const FavouritePage = require('../page-objects/favouritePage');
const BasketPage = require('../page-objects/basketPage');

test.describe('test oz.by', async function() {
    let mainPage;
    let topNavigation;
    let productPage;
    let logIn
    let topicProductsPage
    let favouritePage
    let basketPage
    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        topNavigation = new TopNavigation(page);
        productPage = new ProductPage(page);
        logIn = new LogIn(page);
        topicProductsPage = new TopicProductsPage(page);
        favouritePage = new FavouritePage(page);
        basketPage = new BasketPage(page);
    });







    //  test('№1 log in with correct log in and password', async ({page}) => {
    //     await mainPage.navigate('https://oz.by/')
    //     await logIn.logInCorrect('mmishkarudny@neklo.com','1111111');       /// пробрасываем страницу на которую пойдем                     
    //     expect(await page.textContent(logIn.accountNumber)).to.equal('oz31008140');
    //  });

    //  test('№2 Log in with wrong password', async ({page}) => {
    //     await mainPage.navigate('https://oz.by/')
    //     await logIn.logInWrong('mmishkarudny@neklo.com','2222222');               
    //     expect(await page.textContent(logIn.errorPassword)).to.equal('Неверный пароль. Если вы потеряли или забыли пароль — восстановите его');      
    // });

    // test ('№3 Add item to Basket', async ({page})  => {
    //     await mainPage.navigate('https://oz.by/');
    //     await productPage.putItemToBasket('mmishkarudny@neklo.com','1111111');
    //     expect (await page.textContent(topNavigation.basketAmountLocator)).to.equal('1')
    // }) 

    test ('№4 Remove item from Basket', async ({page})  => {
        await mainPage.navigate('https://oz.by/');
        await basketPage.removeItemFromBasket('mmishkarudny@neklo.com','1111111');
        expect ((await page.textContent(basketPage.noItemsInBasketLocator)).trim()).to.include('корзине пусто. Чтобы найти товары, используйте поиск или выберите товары')
        expect (await page.waitForSelector(topNavigation.basketAmountLocator, { state: 'hidden' }))
    })

    // test ('№5 Serch product with main Search', async ({page})  => {
    //     await mainPage.navigate('https://oz.by/');
    //     await topNavigation.searchItem ('Крестный отец ');
    //     expect ((await page.textContent(productPage.productTitle)).trim()).to.equal('Крестный отец')
    // })
    // test ('№6 Open Topic products page', async ({page})  => {
    //     await mainPage.navigate('https://oz.by/');
    //     await topicProductsPage.selectCatalogDropDown()
    //     await topicProductsPage.textFromLocatorFromDropDown (1)
    //     const textInLocator = await topicProductsPage.textFromLocatorFromDropDown (1)
    //     await topicProductsPage.selectConditionInDropDown(1)      
    //     expect ((await page.textContent(topicProductsPage.breadCrumbs)).trim()).to.equal(textInLocator)       
    // })

    // test ('№7 Add to favourite', async ({page})  => {
    //     await mainPage.navigate('https://oz.by/');
    //     await productPage.putProductToFavourite('mmishkarudny@neklo.com','1111111')   
    //     expect ((await page.textContent(productPage.putToFavouriteButton)).trim()).to.include('В избранном')
    //     expect ((await page.textContent(topNavigation.favouriteAmountLocator)).trim()).to.include('1')       
    // })
    // test ('№8 Remove product from favourite', async ({page})  => {
    //     await mainPage.navigate('https://oz.by/');
    //     await logIn.logInCorrect('mmishkarudny@neklo.com','1111111')
    //     await favouritePage.removeProductFromFavourite ()   
    //     expect ((await page.textContent(topNavigation.favouriteAmountLocator)).trim()).to.include('Избранное')       
    // })






})