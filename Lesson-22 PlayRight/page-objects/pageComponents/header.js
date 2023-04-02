class Header {
    constructor(page) {
        this.page = page;    /// пробрасываем страницу на которую пойдем 
        this.topNavLinks = '.top-navigation__item-link'; /// локатор 
        this.topNavSubLinks = async (subLinkName) => {
            return `//*[@class='top-navigation__sub-link' and text()="${subLinkName}"]`
        };
        this.breadCrumbLink = async (breadCrumbName) => {
            return `//*[@class='breadcrumbs__link' and text()="${breadCrumbName}"]`
        }
    }

    async goToPageWithTopNavMenu(linkNumber, subItemTitle) {            /// функция которая будет работать в тесте. в ней аргумент 
        await this.page.locator('.top-navigation__item-link').nth(linkNumber).hover(); /// ждем элемент с номером из аргумента. наводим 
        await this.page.locator(await this.topNavSubLinks(subItemTitle)).click();   /// ждем элемент который будет содержать какой-то текст. Кликаем
        await this.page.waitForSelector(await this.breadCrumbLink(subItemTitle))
    }
}


module.exports = Header;