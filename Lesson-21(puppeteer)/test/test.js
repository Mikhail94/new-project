const puppeteer = require('puppeteer')

(async function () {
    const browser = await puppeteer.launch({headless: false,        /// подготовка браузера: выключение режима хэдлесс
        args:[                                                      /// в этой штуке мы передаем то что мы будем открывать окно на максимум
            '--start-maximized' // you can also use '--start-fullscreen'
        ]});

const page = await browser.newPage();                               /// создает новую страницу с помощью метода newPage()
await page.setViewport({width: 1920, height:1020});                 /// используется для установки размера окна браузера

await page.goto('https://pptr.dev/');                               /// открываем определенную страницу 
//await page.setViewport({width: 500, height:300});                 /// можем установить размера окна браузера
await page.click('.clean-btn.toggleButton_gllP');                   /// кликаем на локатор 
const title = await page.evaluate( () => {                          /// результат выполнения функции записываем в переменную     
    return document.querySelector('.clean-btn.toggleButton_gllP').getAttribute('title')     /// выбирает первый элемент на странице, который соответствует CSS-селектору
})
console.log(title);
await expect(title).to.equal('Switch between dark and light mode (currently dark mode)')    /// экспект
await browser.close();
})()