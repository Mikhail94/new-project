const Helper = require('../page-objects/helpers/helper');

class ProducersPage {
    constructor(page) {
        this.page = page;
        this.helper = new Helper (page);            
        this.searchProducerField = '#fast-s';     
        this.itemOntheProducersPage = `//*[@class = 'viewer-type-card__li ']`;    
        }   
        async getSearchResult(searchText) {      
            searchText = String(searchText).trim();           
            return `//*[@class='f11 view-peoples cfix']//*[contains(text(),'${searchText}')]`
        }
        async amountSearchResult(searchText) {   
            searchText = String(searchText).trim()
            return `//*[@class='f11 view-peoples cfix']//*[contains(text(),'${searchText}')]/following-sibling::small`
        }     

        async searchItemsByProducerName(searchText) {  
            await this.page.click(this.searchProducerField);
            await this.page.type(this.searchProducerField, searchText, {delay: 1});            
            const textFromSearcResult = await this.page.textContent(await this.getSearchResult(searchText));
            const amountOfProduserItems = await this.page.textContent(await this.amountSearchResult(searchText));
            await this.page.click(await this.getSearchResult(searchText))
            await this.page.waitForSelector(this.itemOntheProducersPage);
            const amountOfItems = await this.helper.countElementsOnPage(await this.itemOntheProducersPage)
            const amoutOfUtemsString = amountOfItems.toString()
            return {textFromSearcResult, amountOfProduserItems, amoutOfUtemsString};            
        }
        
}
module.exports = ProducersPage;