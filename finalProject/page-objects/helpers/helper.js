 class Helper {
    constructor(page) {
        this.page = page;           
        }

    async  countElementsOnPage(locator) {
        const elementCount = await this.page.$$eval(locator, elements => elements.length);
        return elementCount;
    }

    async getUrlofTheTab(page) {
        const currentUrl = await this.page.url();
        return currentUrl;
      }

    async navigateToCordinats (navigateToElement)  {
        const element = await this.page.$(navigateToElement);
        const boundingBox = await element.boundingBox();
        const x = boundingBox.x + boundingBox.width;
        const y = boundingBox.y;
        await this.page.mouse.move(x, y);
    }
}
module.exports = Helper;