const mainPage = require('../pageobjects/mainPage');                                /// подтягиваем файлы из пэйдж обджетс
const topNavigation = require('../pageobjects/components/topNavigation');           /// подтягиваем файлы из топ нагэйшнс
const productListingPage = require('../pageobjects/productListingPage');            /// подтягиваем файлы из продукт листинг пэйдж

describe('Page Object Model', function () {                                         /// описываем что будем делать, открываем функцию
    it('should open product details page', async () => {                            /// описываем что будем делать, открываем функцию
        await mainPage.navigate('https://www.metaltis.be/');                        /// переходим на сайт
        await topNavigation.goToProductListingPage('Hijsmiddelen', 'Alle - One way slings'); /// принимаем функцию из topNavigation файла и передаем сюда имя параметров
        await productListingPage.chooseSortingOption('Prijs');          /// /// принимаем функцию из productListingPage файла и передаем сюда имя параметров
        await browser.pause(3000);
    })
})