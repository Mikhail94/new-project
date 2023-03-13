// const { Builder, By, until } = require('selenium-webdriver');                                       /// метод нужен всегда 

// (async function () {                                                                                /// создаем функцию
//         let driver = await new Builder().forBrowser('chrome').build();                              /// создает инстанс драйвера
//         await driver.get('https://www.onliner.by/');                                                /// используем метод что бы перейти на какой либо сайт 
//         const menuItems = await driver.findElements(By.css('.b-main-navigation__text'));            /// создаем переменную которая будет искать элемент по классу css 
//         await menuItems[0].click();                                                                 /// кликаем
//         const superPrice = await driver.findElement(By.css('.catalog-navigation__bubble'));

//         // await driver.switchTo().frame(await driver.findElement('.modal-iframe'));                   /// переключаемся на iframe (переключаемся на новое всплывающее окно)
//         // await driver.sleep(3000);                                                                   /// браузер засыпает. ждем 3 секунды

//         console.log(await superPrice.getText());

//         await driver.quit();                                                                        /// чистим за собой
//     }
// )();

(async function () {                                                                    /// создаем функцию
        let driver = await new Builder().forBrowser('chrome').build();                  /// создает инстанс драйвера
        await driver.get('https://www.onliner.by/');                                    /// используем метод что бы перейти на какой либо сайт 
        const searchField = await driver.findElement(By.css('.fast-search__input'));    /// создаем переменную которая будет искать элемент по классу css 
        await searchField.sendKeys('робот пылесос');                                    /// вводим текст по которому будем искать переменная searchField
        await driver.sleep(5000);
        //     console.log(await driver.wait(until.ableToSwitchToFrame(0)))
        // let iframe = await driver.findElement(By.css('.modal-content iframe'));
        // console.log('iframe --- ', iframe)
        // await driver.wait(until.elementsLocated(iframe));
        await driver.switchTo().frame(0);                                               /// переключаемся на iframe (переключаемся на новое всплывающее окно)
        console.log('START')
        let title = await driver.findElements(By.css('.product__title > a'));
        console.log(title[0])
        console.log('START')
        await driver.wait(until.elementIsEnabled(title[0]));
        await title[3].click();                                                        /// нажимает на 3й элемент
        await driver.sleep(3000);                                                    /// браузер засыпает. ждем 3 секунды
        await driver.quit();                                                         /// чистим за собой
    }
)()