const {Builder, By} = require (`selenium-webdriver`);

(async function () {
    let driver = await new Builder().forBrowser('сhrome').build();
    await driver.get(`https://www.onliner.by/`);
    const searchField = await driver.findElement(By.css(`.fast-search__input`));
    await searchField.sendKeys(`робот пылесос`);
    const searchResults = await driver.sendElement(By.css(`.result__item_product  .product__title-link`));
    await searchResults[0].click();
    await driver.sleep(3000);
    await driver.quit()
}
)()