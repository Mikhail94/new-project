const mainPage = require('../page_object/mainPage');
const I = require('../helpers/baseElements');
const header = require('../page_object/components/Header');
const cartPage = require('../page_object/cartPage');
const { expect } = require('chai');

describe.skip(`Cart tests`, function () {
    it.only(`cart should be empty`, async () => {
        await mainPage.navigate();          /// идем на нужную страницу
        await I.click(mainPage.acceptCookiesButton);    /// нажимаем на кнопку "принять куки"
        await I.click(header.cartButton);       /// нажимаем на локатор
        expect(await I.getText(cartPage.emptyCartNotification)).to.equal('У вас пока нет ни одного товара в корзине,\n' +
            'вы можете выбрать их здесь');
    }); 


}) 