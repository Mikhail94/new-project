class ProducersPage {
    constructor(page) {
        this.page = page;            
        this.searchProducerField = '#fast-s'; /// локатор с полем воода текста по бренду     
        }
        

        async searchItemsByProducerName(searchText) {       /// ищет товары по бренду 
            await this.page.click(this.searchProducerField);
            await this.page.type(this.searchProducerField, searchText, {delay: 1});
            const searchResult = this.getSearchResult(searchText)
            await this.page.waitForSelector(searchResult);             
            await this.page.click(searchResult)
            return searchResult
        }
       
        getSearchResult(searchText) {       /// название бренда товаров. локатор 
            searchText = searchText.trim();           
            return `//*[@class='f11 view-peoples cfix']//*[contains(text(),'${searchText}')]`
        }
        getTextFromSearchResult (searchText) {        
            const textFromSearcResult = this.page.textContent(this.getSearchResult(searchText));
            return textFromSearcResult;
        }



        amountSearchResult(searchText) {            /// количество найденых товаров. локатор
            return `//*[@class='f11 view-peoples cfix']//*[contains(text(),'${searchText}')]/following-sibling::small`
        }



   }
   module.exports = ProducersPage;      /// экспортируем класс