const MainPage = require('../page-objects/mainPage');

class TopicProductsPage {
    constructor(page) {
        this.page = page;    /// пробрасываем страницу на которую пойдем 
        this.mainPage = new MainPage (page);
        this.breadCrumbs = '//*[@id="top-page"]/div[2]/div[2]/div/ul/li[3]'; /// локатор с хлебными крошками
        

       
       }
async textFromLocatorFromDropDown (number) {        /// функция которая достает текст из локатора 
    const elementFromDropDownLocator = await this.mainPage.elementFromDropDown(number);
    const textElementFromLocator = await elementFromDropDownLocator.textContent();
    return textElementFromLocator;}



       async selectCatalogDropDown() {         /// вызываем функцию которая нажимает на дропдаун
        const catalogDropDownElement = await this.mainPage.catalogDropDown();
        await catalogDropDownElement.click();
       }
       async selectConditionInDropDown(number) {
        await this.mainPage.elementFromDropDown(number);    /// вызываем функцию которая ждет локатор 
        const elementFromDropDown = await this.mainPage.elementFromDropDown(number);
        await elementFromDropDown.click();      /// кликаем на локатор из дропдауна 
        await this.page.waitForSelector(this.breadCrumbs);
        
    }

   }

   module.exports = TopicProductsPage;      /// экспортируем класс