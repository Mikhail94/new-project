class TopNavigation {
    constructor(page) {
        this.page = page;
        this.docsButton = `//*[contains(text(),'Docs')]//ancestor::*[@class='navbar__item navbar__link']`;
        this.searchField = `//*[@class = 'DocSearch DocSearch-Button']`
        this.enterSearchField = `//*[@id="docsearch-input"]`
        this.searchResultInDropdown = `(//*[@class = 'DocSearch-Hit-Container'])[2]`               
    }

    async goToPage(page) {   
        await this.page.click(page)        
    }

    async getTextFromLocator (locator) { 
        const section = await this.page.locator(locator);
        const textSectioName = await section.textContent();
        return textSectioName;
    }

    async searchPageByText (text) {  
        await this.page.click(this.searchField)
        await this.page.type(this.enterSearchField, text, {delay: 100})
    }

    async goToTheAnotherTab(page) { 
        const [newPage] = await Promise.all([
            new Promise((resolve) => this.page.once('popup', resolve)),
            this.goToPage(page)
        ]);
        return newPage;
    }


}
   module.exports = TopNavigation;