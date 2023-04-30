const TopNavigation = require('./components/topNavigation');

class MainPage {
    constructor(page) {
        this.page = page;
        this.topNavigation = new TopNavigation (page);
        this.segmentTitle = `(//*[@class = 'theme-doc-markdown markdown']//h1)`
        this.sectionName = `(//*[@class = 'theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item'])[2]`
        this.gitHubButton = `//*[@class = 'navbar__item navbar__link header-github-link']`
        }    

    async navigate(url) {
        await this.page.goto(url);
    } 

}
module.exports = MainPage;