const { test } = require('@playwright/test');
const MainPage = require('../page-objects/mainPage');
const TopNavigation = require('../page-objects/pageComponents/topNavigation');
const LogIn = require('../page-objects/logIn');
const {expect} = require('chai');
const ProductPage = require('../page-objects/productPage');
const TopicProductsPage = require('../page-objects/topicProducts');
const FavouritePage = require('../page-objects/favouritePage');
const BasketPage = require('../page-objects/basketPage');
const ProducersPage = require('../page-objects/producersPage');
const BreadCrumbs = require('../page-objects/pageComponents/breadCrumbs');
const Helper = require('../page-objects/helpers/helper');
const PersonalSpace = require('../page-objects/personalSpace');
const MapPage = require('../page-objects/mapPage');
const BonusProgrammPage = require('../page-objects/bonusProgrammPage');
const DeliveryAdress = require('../page-objects/deliveryAdressPage');
const Contacts = require('../page-objects/contactsPage');
const WriteToUsPage = require('../page-objects/writeToUsPage');

test.describe('test oz.by', async function() {
    let mainPage;
    let topNavigation;
    let productPage;
    let logIn
    let topicProductsPage
    let favouritePage
    let basketPage
    let producersPage
    let breadCrumbs
    let personalSpace
    let mapPage
    let bonusProgrammPage
    let deliveryAdress
    let contacts
    let writeToUsPage
    let helper

    test.beforeEach(async ({page}) => {
        mainPage = new MainPage(page);
        topNavigation = new TopNavigation(page);
        logIn = new LogIn(page);
        personalSpace = new PersonalSpace(page);
        productPage = new ProductPage(page);
        basketPage = new BasketPage(page);        
        topicProductsPage = new TopicProductsPage(page);
        breadCrumbs = new BreadCrumbs(page);
        favouritePage = new FavouritePage(page);
        producersPage = new ProducersPage(page);
        mapPage = new MapPage(page);
        bonusProgrammPage = new  BonusProgrammPage(page);        
        deliveryAdress = new DeliveryAdress(page);
        contacts = new Contacts(page);
        writeToUsPage = new WriteToUsPage(page);
    });

    test('№1 log in with correct Email and password', async ({page}) => {
        await mainPage.navigate('https://oz.by/')
        await logIn.logIn('mmishkarudny@neklo.com','1111111');                    
        expect(await page.textContent(logIn.accountNumber)).to.equal('oz31008140');
    });

    test('№2 Log in with wrong password', async ({page}) => {
        await mainPage.navigate('https://oz.by/')
        await logIn.logIn('mmishkarudny@neklo.com','2222222');               
        expect(await page.textContent(logIn.errorPassword)).to.equal('Неверный пароль. Если вы потеряли или забыли пароль — восстановите его');      
    });

    test('№3 Log Out', async ({page}) => {
        await mainPage.navigate('https://oz.by/')     
        await logIn.logIn('mmishkarudny@neklo.com','1111111');   
        await personalSpace.logOut ()
        expect (await page.isVisible(topNavigation.enterButtonLocator))
        await page.click(topNavigation.basketButton)
        expect (await page.isVisible(logIn.logInModalWindow))
    });

    test ('№4 Add item to Basket', async ({page})  => {
        await mainPage.navigate('https://oz.by/');
        await productPage.putItemToBasket('mmishkarudny@neklo.com','1111111');
        expect (await page.textContent(topNavigation.basketAmountLocator)).to.equal('1')
    })
    test ('№5 Remove item from Basket', async ({page})  => {                
        await mainPage.navigate('https://oz.by/');
        await basketPage.removeItemFromBasket('mmishkarudny@neklo.com','1111111');
        expect ((await page.textContent(basketPage.noItemsInBasketLocator)).trim()).to.include('корзине пусто. Чтобы найти товары, используйте поиск или выберите товары')
        expect (await page.isVisible(topNavigation.basketAmountLocator, { state: 'hidden' }))
    })

    test ('№6 Serch product with main Search', async ({page})  => {
        await mainPage.navigate('https://oz.by/');
        const searchText = 'Крестный отец '
        await topNavigation.searchItem (searchText);
        expect ((await page.textContent(productPage.productTitle)).trim()).to.equal(searchText.trim())
    })

    test ('№7 Open Topic products page', async ({page})  => {
        await mainPage.navigate('https://oz.by/');
        await topicProductsPage.selectCatalogDropDown(1)        
        const textElementFromLocator = await topicProductsPage.textFromLocatorFromDropDown(1)      
        expect ((await page.textContent(breadCrumbs.lastOpenedBreadCrumbs)).trim()).to.equal(textElementFromLocator)       
    })

    test ('№8 Add to favourite', async ({page})  => {
        await mainPage.navigate('https://oz.by/');
        await productPage.putProductToFavourite('mmishkarudny@neklo.com','1111111')   
        expect ((await page.textContent(productPage.putToFavouriteButton)).trim()).to.include('В избранном')
        expect ((await page.textContent(topNavigation.favouriteAmountLocator)).trim()).to.include('1')       
    })
    test ('№9 Remove product from favourite', async ({page})  => {              
        await mainPage.navigate('https://oz.by/');
        await favouritePage.removeProductFromFavourite ('mmishkarudny@neklo.com','1111111')   
        expect ((await page.textContent(topNavigation.favouriteAmountLocator)).trim()).to.include('Избранное')       
    })

    test('№10 Go to the social media page', async ({ page }) => {
        await mainPage.navigate('https://oz.by/');
        const urlInsideOfLocator = await topNavigation.getUrlFromSocialMediaButton(1);
        const newPage = await topNavigation.switchToNextTabAfterClickToSocialNetwork(1);
        const currentUrl = await topNavigation.getUrlofTheTab(newPage);
        expect(currentUrl).to.equal(urlInsideOfLocator);
    });

    test('№11 Search by producers', async ({page}) => {
        await mainPage.navigate('https://oz.by/producer')     
        const { textFromSearcResult, amountOfProduserItems, amoutOfUtemsString } = await producersPage.searchItemsByProducerName('Анкил ')  /// находим нужный бренд и кликаем на него
        expect((await page.textContent(breadCrumbs.lastOpenedBreadCrumbs)).trim()).to.equal(textFromSearcResult);
        expect (amountOfProduserItems).to.equal(amoutOfUtemsString);
    }); 

    test('№12 Open a Map', async ({page}) => {
        await mainPage.navigate('https://oz.by/')     
        const {textContentStoreButton, textContentMiniStoreImageOnTheMap} = await mapPage.showOZstoresOntheMap(2); 
        expect (await page.isVisible(mapPage.mapYandex))
        expect(textContentMiniStoreImageOnTheMap.replace(/\s+/g, '')).to.include(textContentStoreButton.replace(/\s+/g, ''));
   });

    test('№13 Observe bonus programm condition', async ({page}) => {
        await mainPage.navigate('https://oz.by/')     
        const {urlFromBonusProgrammRules, curentUrl} = await bonusProgrammPage.findOutAboutBonusProgramm (3); 
        expect ((await curentUrl).trim()).to.include(urlFromBonusProgrammRules)
    }); 

    test('№14 Pagination', async ({page}) => {
        await mainPage.navigate('https://oz.by/')     
        const {expectedUrl, currentUrl} = await topicProductsPage.productsPagination(3)
        expect(expectedUrl.trim().replace(/\n| /g, '')).to.equal(currentUrl.trim().replace(/\n| /g, ''));
   });

    test('№15 Add Delivery Adress', async ({page}) => {
        await mainPage.navigate('https://oz.by/')     
        const zipAddress = '211400';
        const street = `ул. Ленина`;
        const building = `13`;
        const flat = `13`;
        const { textCityField, resultTextStreetBuildingFlat, resultTextCityRegion} = await deliveryAdress.addAddressDelivery ('mmishkarudny@neklo.com','1111111', zipAddress, street, building, flat)
        expect (resultTextStreetBuildingFlat).to.equal(street+', дом '+building+', кв. '+flat);
        expect (resultTextCityRegion).to.equal(textCityField+', '+zipAddress);
    }); 

    test('№16 Add Review About Item', async ({page}) => {
        await mainPage.navigate('https://oz.by/')
        const reviewText = 'цена соответствует качеству'     
        const reviewBody = await productPage.addReview ('mmishkarudny@neklo.com','1111111', 2, 2, reviewText )
        expect (reviewBody).to.equal(reviewText); 
    });

    test('№17 Contacts', async ({page}) => {
        await mainPage.navigate('https://oz.by/')
        const emails = await contacts.observeContactsPage ();
        expect(emails).to.eql(['oz@oz.by', 'pr@oz.by', 'offer@oz.by', 'razvitie@oz.by']);
    });

    test('№18 PromotionOfTheDay', async ({page}) => {       
        await mainPage.navigate('https://oz.by/')
        const {topickOfThePromotion, topickOfThePromotionOnBreadCrumbs, promotionDescriptionText} = await topicProductsPage.promotionOfTheDay()
        expect(topickOfThePromotion).to.include((topickOfThePromotionOnBreadCrumbs.trim()));
        expect(promotionDescriptionText.trim().normalize()).to.include(topickOfThePromotionOnBreadCrumbs.trim().normalize());
    }); 

    test('№19 Find Items From Filter', async ({page}) => { 
        await mainPage.navigate('https://oz.by/')
        const sectionWithCheckBoxes1 = 1;
        const numberOfCheckBox1 = 2;
        const sectionWithCheckBoxes2 = 2;
        const numberOfCheckBox2 = 2;
        const minPrice = `200`
        const maxPrice = `500`
        const priceOfItem = await topicProductsPage.findItemByFilter(8, 17, sectionWithCheckBoxes1, numberOfCheckBox1, sectionWithCheckBoxes2, numberOfCheckBox2, minPrice, maxPrice)
        const allPricesInRange = priceOfItem.every(price => price >= minPrice && price <= maxPrice);
        expect(allPricesInRange).to.be.true;
    }); 

    test('№20 Write To Us With Wrong Capture ', async ({page}) => { 
        await mainPage.navigate('https://oz.by/')
        await writeToUsPage.writeToSupportWithWrongCapture(`test text`, `test name`, `abc@abc.co`, `123`)
        expect(await page.textContent(writeToUsPage.errorMessage)).to.include('Ваше сообщение не отправлено!');
        expect(await page.textContent(writeToUsPage.errorMessage)).to.include('Вы ввели неверный код проверки. Введите его, пожалуйста, и попробуйте отправить свое сообщение снова.');
    });
})