const {Builder, By, Key, until } = require("selenium-webdriver");
const {expect} = require('chai');

describe('Onliner test', function () {                                      /// класс с инстансом браузера
    let driver;                                                             /// переменная для драйвера
    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();                          /// окно браузера будет расширяться на максимум
        await driver.manage().setTimeouts( { implicit: 10000 } );           
    });

    // after(async () => {                                                                      /// закрываем браузер 
    //     await driver.quit();
    // });

    // it.skip('catalog tab should redirect to catalog page', async () => {
    //     await driver.get('https://www.onliner.by/');
    //     const menuItems = await driver.findElements(By.css('.b-main-navigation__text'));
    //     await menuItems[0].click();
    //     const superPrice = await driver.findElement(By.css('.catalog-navigation__bubble'));
    //     expect(await superPrice.getText()).to.equal('Все суперцены!');                          /// говорит что мы ожидаем
    // })

    it('google', async () => {
        await driver.get('https://www.google.com/');                                            /// говорим что будем тестить
        const acceptCoockiesButton = await driver.findElement(By.css('#L2AGLb'))                /// объявляем элемент на который нам нужно будет нажать 
        await driver.actions().click(acceptCoockiesButton).perform();                           /// подтверждаем кликом на кнопку в модалке 
        const searchField = await driver.findElement(By.css('.SDkEP .gLFyf'));                  /// говорим что будем искать по CSS
        await driver.actions().move({ origin: searchField }).press().sendKeys('chromedriver').keyDown(Key.ENTER).perform();     /// создаем цепочку: навести на поле ввода->нажать->ввести текст-> нажать Enter 
        const linksWithResults = await driver.findElements(By.css('.yuRUbf h3'));
        await driver.wait(until.elementIsVisible(await driver.findElements(By.css('.yuRUbf h3'))), 20000);
        expect(await linksWithResults[0].getText().toLowerCase()).to.contain('chromedriver')    ///ожидаемый результат в том что в первом элементе будет слово 'chromedriver'
    });

    it('sky sports', async () => {
        await driver.get('https://www.skysports.com/');
        const transferCentrLinks = await driver.findElements(By.xpath(`//a[@class='site-nav-desktop__menu-link' and text()='Transfer Centre']`));
        console.log(transferCentrLinks)
        await driver.executeScript('arguments[0].click()', transferCentrLinks[1]);
        await driver.sleep(3000)
    })
})