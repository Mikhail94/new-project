const MainPage = require('../page-objects/mainPage');
const TopNavigation = require('../page-objects/pageComponents/topNavigation');
const BreadCrumbs = require('../page-objects/pageComponents/breadCrumbs');

class TopicProductsPage {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage (page);
        this.breadCrumbs = new BreadCrumbs (page)
        this.topNavigation = new TopNavigation (page);
        this.breadCrumbs = '//*[@id="top-page"]/div[2]/div[2]/div/ul/li[3]'; 
        this.promotionDescription = `#goods_annotation_1501594`;
        this.minPriceFilter = `#inp1_r_cost`;
        this.maxPriceField = `#inp2_r_cost`;
        this.applyFilterButton = `.filters__searchbtn__btn`;
        }
        async itemsPagination (numberPage) {
        return (`(//*[@class = 'g-pagination__list__li pg-link'])[${numberPage}]`)
        }
        async checkBoxesOnFilter (sectionWithCheckBoxes, numberOfCheckBox) { 
            return (`((//*[@class = 'fm-block-universal-top filters__chkslist'])[${sectionWithCheckBoxes}]//*[@class = 'filters__chkslist__chk'])[${numberOfCheckBox}]`)
        }
        async secondConditionFindItem (numberOfSecondCondition) {
            return (`(//*[@class = 'landing-subnav__list-item'])[${numberOfSecondCondition}]//*[@class = 'landing-subnav__link-text']`)
        }

        async selectCatalogDropDown(numberOfDropdown) {  
            const catalogDropDownElement = await this.mainPage.catalogDropDown(numberOfDropdown);
            await this.page.click(catalogDropDownElement);
        }
        
        async textFromLocatorFromDropDown (numberOfsection) { 
            const elementFromDropDownLocator = await this.mainPage.elementFromDropDown (numberOfsection);
            const textElementFromLocator = await this.page.textContent(elementFromDropDownLocator);
            await this.page.click(elementFromDropDownLocator);
            await this.page.waitForSelector(this.breadCrumbs.lastOpenedBreadCrumbs);    
            return textElementFromLocator;    
        }

        async productsPagination (numberPage) {  
            await this.page.click(await this.mainPage.interteinmentAndArtButton)
            const urlOfItemsPage = await this.page.url();
            const numberInButton = await this.page.textContent(await this.itemsPagination (numberPage));
            await this.page.click(await this.itemsPagination (numberPage))
            const currentUrl = await this.page.url();
            const expectedUrl = urlOfItemsPage + '?page=' + numberInButton
            return {expectedUrl, currentUrl}
        }

        async promotionOfTheDay () {  
            const topickOfThePromotion =  await this.page.textContent(this.topNavigation.promotionOfTheDayButton)
            await this.page.click(this.topNavigation.promotionOfTheDayButton)
            const topickOfThePromotionOnBreadCrumbs = await this.page.textContent(this.breadCrumbs)
            const promotionDescriptionText = await this.page.textContent(this.promotionDescription)
            return {topickOfThePromotion, topickOfThePromotionOnBreadCrumbs, promotionDescriptionText}
        }

        async findItemByFilter (numberOfMainSection, numberOfSecondCondition, sectionWithCheckBoxes1, numberOfCheckBox1, sectionWithCheckBoxes2, numberOfCheckBox2, minPrice, maxPrice) {
            const mainCondition = await this.mainPage.ItemsFromMainSection (numberOfMainSection)
            await this.page.click(mainCondition)
            const secondCondition = await this.secondConditionFindItem (numberOfSecondCondition) 
            await this.page.click(secondCondition)
            const checkboxes1 = await this.checkBoxesOnFilter (sectionWithCheckBoxes1, numberOfCheckBox1)
            await this.page.click(checkboxes1)
            const checkboxes2 = await this.checkBoxesOnFilter (sectionWithCheckBoxes2, numberOfCheckBox2)
            await this.page.click(checkboxes2)
            await this.page.click(this.minPriceFilter)
            await this.page.type(this.minPriceFilter, minPrice, {delay: 10});
            await this.page.click(this.maxPriceField)
            await this.page.type(this.maxPriceField, maxPrice, {delay: 10});
            await this.page.click(this.applyFilterButton)
            const elements = await this.page.$$('.viewer-type-card__li .item-type-card__btn');
            const priceOfItem = await Promise.all(elements.map(async (element) => {
            const text = await element.innerText();
            return parseFloat(text.replace(',', '.').replace(/[^\d\.]/g, ''));
            }));
            return priceOfItem
       }

}
module.exports = TopicProductsPage;