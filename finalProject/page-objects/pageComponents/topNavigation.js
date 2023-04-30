class TopNavigation {
    constructor(page) {
        this.page = page;
        this.enterButtonLocator = '.top-panel__userbar__auth';
        this.basketButton = '.top-panel__userbar__cart__item';
        this.basketAmountLocator = `.top-panel__userbar__cart__count`;
        this.favouriteAmountLocator = `.top-panel__userbar__dlink--slink`;
        this.mainSearchField = `.ui-autocomplete-input`;
        this.mainSearchDropDown = `//*[@id="ui-id-1"]`;
        this.writeToUsButton = `//*[@class = 'dark border']`;
        this.promotionOfTheDayButton = `.top-panel__hnav__spec`;
        }
        async socialMediaButton(number) {    
            return this.page.$(`(//*[@class = 'footer-full__social-link'])[${number}]`)  
        }

        async searchItem (searchText) {   
            await this.page.type(this.mainSearchField, searchText, {delay: 100});
            await this.page.click(this.mainSearchDropDown)
        }        
        
        async getUrlFromSocialMediaButton (number) {  
            const elemenSocialMedia = await this.socialMediaButton(number)
            const urlFromSocialMediaButton = await elemenSocialMedia.getAttribute('href');
            return urlFromSocialMediaButton
        }

        async switchToNextTabAfterClickToSocialNetwork(number) {  
            const [newPage] = await Promise.all([
                this.page.waitForEvent('popup'), 
                await this.page.click(`(//*[@class = 'footer-full__social-link'])[${number}]`),
            ]);
            return newPage;
        }

        async getUrlofTheTab(page) {  
            const currentUrl = await page.url();
            return currentUrl;
        }

}
module.exports = TopNavigation;

