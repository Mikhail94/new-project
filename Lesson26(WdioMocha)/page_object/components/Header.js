const BasePage = require('../basePage');
const element = require('../../helpers/baseElements');

class Header extends BasePage {
    get catalogButton() {       /// локатор
        return '.styles_catalogButton__1K6kI';
    }

    get cartButton() {      /// локатор
        return '.headerCart';
    }

    get topNavTabs() {       /// локатор
        return '.styles_promoItem__3H-t7 > a';
    }

    get headerCartCount() {     /// локатор
        return '.headerCartCount'
    }

    async waitProductInCart(numberOfProducts) {
        await this.headerCartCount.getText();
        await element.waitUntilTextChanges(this.headerCartCount, numberOfProducts)
    }

    async goToCart() {
        await element.click(this.cartButton);
    }
}

module.exports = new Header();