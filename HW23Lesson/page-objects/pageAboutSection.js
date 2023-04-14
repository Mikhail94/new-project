const MainPage = require('../page-objects/mainPage');
const BreadCrumbs = require('../page-objects/components/breadCrumbs');
const TopNavigation = require('./components/topNavigation');

class PageAboutSection {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage (page);
        this.breadCrumbs = new BreadCrumbs (page);
        this.topNavigation = new TopNavigation (page);
        this.titleSegmentPage = `//*[@id="docusaurus_skipToContent_fallback"]//header`;
    }

    async goToMainPage (step1, step2, step3) {
        await this.topNavigation.goToPage(step1)
        await this.topNavigation.goToPage(step2)
        await this.topNavigation.goToPage(step3)
    }

}
module.exports = PageAboutSection;