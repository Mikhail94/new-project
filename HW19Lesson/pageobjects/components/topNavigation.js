const BasePage = require('../basePage');


class TopNavigation extends BasePage {
    mainMenuTab(tabName) {
        return $(`//*[@class='navbar__items']//*[contains(text(),'${tabName}')]`)
    }

    mainSearch() {
        return $(`//*[@class='DocSearch DocSearch-Button']`)
    }

    enterSearchField () {
        return $(`//*[@class='DocSearch-Form']//*[@class='DocSearch-Input']`)
    }

    firstSearchResult () {
        return $(`//*[@id="docsearch-item-0"]/a/div`)
    }

    elementWithText () {
        return $(`//*[@class='theme-doc-markdown markdown']/header/h1`)
    }


     actualUrl() {
        return browser.getUrl()
    }

    getColorBefore(tabName) {
        return this.mainMenuTab(tabName).getCSSProperty('color');
    }
    getColorAfter(tabName) {
        return this.mainMenuTab(tabName).getCSSProperty('color');
    }



    async goToGettingStartedPage(tabName,Url) {
    await this.mainMenuTab(tabName).click();                              
    await this.actualUrl();
    }

    async containTextOnPage(text) {
         await this.mainSearch().click();
         await this.enterSearchField().setValue(text),1000;
         await this.firstSearchResult().click();
         await browser.keys(['Enter']);
         await this.elementWithText().waitForDisplayed();
    }    
    
    async buttonCnangeColor(tabName) {
    await (await this.mainMenuTab(tabName)).waitForDisplayed();
    const colorBefore = await this.getColorBefore(tabName);
    await (await this.mainMenuTab(tabName)).click();
    const colorAfter = await this.getColorAfter(tabName);
    return { colorBefore, colorAfter };
}


}

module.exports = new TopNavigation();