const MainPage = require('../page-objects/mainPage');

class MapPage {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage(page);
        this.mapYandex = `//*[@class = 'ymaps-2-1-79-events-pane ymaps-2-1-79-user-selection-none']`;
        this.miniStoreImageOnTheMap = `.b-map-balloon__inner`;   
    }

    async showOZstoresOntheMap (number) {
        await this.page.click (this.mainPage.OZstoresButton)
        await this.page.click(await this.mainPage.storesInMinsk(number))
        const textContentStoreButton = await this.page.textContent(await this.mainPage.storesInMinsk(number));
        const textContentMiniStoreImageOnTheMap = await this.page.textContent(this.miniStoreImageOnTheMap)
        return {textContentStoreButton, textContentMiniStoreImageOnTheMap}      
    }

}
module.exports = MapPage;