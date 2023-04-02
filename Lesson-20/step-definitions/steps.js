const { Given, When, Then } = require('@wdio/cucumber-framework');      /// импортируем given, when, then из библиотеки 
const {expect} = require ('chai')                                       /// подтягиваем чаи библиотеку

Given(/^I navigate to "(.*)"$/, async (url) => {                        /// прекондиция при которой мы навигэйтимся на урлу
    await browser.url(url)
});

Given(/^I accept all cookies$/, async () => {                           /// прекондиция при которй мы ждем пока элемент не станет кликабельным и нажимаем на первый элемент в массиве локаторов
    await $$('.eom-buttons button.yt-spec-button-shape-next--size-m')[1].waitForClickable();
    await $$('.eom-buttons button.yt-spec-button-shape-next--size-m')[1].click()
})

When(/^I input (.*) to field (.*)$/, async function (text, selector) {      /// функция которая будет делать. (.*) сюда вставляется значение из тестфайла .feature 
    const world = this;                                                     /// СОЗДАЕТСЯ КОНТЕКСТ ТЕСТА. В нем можно сохранять данные 
    world.inputText = text;
    console.log('world --- ', world);
    await $(selector).waitForDisplayed();                                   ///ждем селектор
    await $(selector).setValue(text);                                       ///вводим значение в соответствии с переменной text
});

When(/^I click search button$/, async () => {                               /// функция где нажимаем на кнопку ввода
    await $('button#search-icon-legacy').waitForClickable();                /// ждем пока кнопка будет кликабельна
    await $('button#search-icon-legacy').click();                           /// нажимаем на кнопку
})

Then(/^I expect that element (.*) contain text (.*)$/, async function (selector, text) {  /// экспектед, где мы ждем что в локаторе будет определенный текст. передаем эти параметры в функции 
    const world = this;                                                      /// СОЗДАЕТСЯ КОНТЕКСТ ТЕСТА. В нем можно сохранять данные
    console.log('world --- ', world);
    await browser.pause(2000)                                                /// ждем браузер 2 секунды
    await $$(selector)[0].waitForClickable();                                /// ждем пока первый селектор из массива будет кликабельным 
    expect((await $$(selector)[0].getText()).toLowerCase()).to.contain(text) /// ожидаем что в элементе есть текст который мы передаем параметром 
});

When("I add value {string} to {string}", async function (text, selector) {     /// здесь мы будем вводить значение в селектор
    await $(selector).waitForDisplayed();                                      /// ждем седектор
    await $(selector).addValue(text);                                          /// вводим текст в селектор
})

When("I wait for {string}", async function (seconds) {                         /// функция которая будет ждать заданное количество секунд
    const pause = seconds * 1000
    await browser.pause(pause)
})

When("I switch to frame {int}", async function (frameNumber) {                /// здесь мы будем переключаться на другой фрэйм
    const frame = frameNumber - 1
    await browser.switchToFrame(frame)
})

When("I click {string} {int} element", async function (selector,number) {      /// здесь мы будем говорить по какому элементу з массива будем кликать. 
    const clickNumber = number - 1;                                            /// переменная где сохраняется наш точный номер элемента
    await $$(selector)[clickNumber].waitForClickable();                        /// ждем селектор с номером
    await $$(selector)[clickNumber].click();                                   /// нажимаем на селектор с номером
})