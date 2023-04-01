const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');

describe('ChromeDriver', function () {                                      
    let driver;                                                             
    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();                          
        await driver.manage().setTimeouts( { implicit: 1000 } );           
     });
    after(async () => { 
        await driver.quit();
    });



it('main title should exist text ', async () => {
    await driver.get('https://chromedriver.chromium.org/home');                                         
    const visibleText = await driver.findElement(By.xpath(`//span[@class='Rn3Z1b C9DxTc ']`))
    driver.wait(until.elementIsVisible(await driver.findElements(By.xpath(`//span[@class='Rn3Z1b C9DxTc ']`))));
    expect(await visibleText.getText()).to.contain('ChromeDriver')    
});

it('click to the Chrome Extensions, hightlite main title, recheck text', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    const haderButtonCromeExtensions = await driver.findElement(By.xpath(`//*[contains(text(),'Chrome Extensions')]//ancestor::*[@class='aJHbb dk90Ob jgXgSe HlqNPb']`))
    await driver.actions().click(haderButtonCromeExtensions).perform();
    driver.wait(until.elementIsVisible(await driver.findElements(By.xpath(`//*[contains(text(),'Chrome Extensions')]//ancestor::*[@class='aJHbb dk90Ob jgXgSe HlqNPb']`))), 20000);
    const newTitle = await driver.findElement(By.xpath(`//*[@class=' Rn3Z1b']`))
    driver.executeScript("arguments[0].style.backgroundColor = 'red'", newTitle); 
    expect(await newTitle.getText()).to.contain('Chrome Extensions')
});

it('go to search field, enter text, first link shoul contain enetered text', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    const searchButton = await driver.findElement(By.xpath(`//*[@class = 'RBEWZc']`));
    await searchButton.click();      
    const searchField = await driver.findElement(By.xpath(`//*[@class= 'whsOnd zHQkBf']`));
    await searchField.sendKeys('driver', Key.RETURN);
    await driver.wait(until.elementLocated(By.xpath(`//*[@data-position="1"]//ancestor::*[@class='vH0yjd']`)));
    const link1WithResults = await driver.findElement(By.xpath(`//*[@data-position="1"]//ancestor::*[@class='vH0yjd']`));
    expect(await link1WithResults.getText()).to.contain('driver');
});

it('open extra menu, select any segment, URL shoul contain text', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    const moreButton = await driver.findElement(By.xpath(`//*[@id='WDxLfe']//li[@class='VsJjtf oXBWEc']//div[@class='mBHtvb u5fiyc']`));
    await driver.actions().move({ origin: moreButton }).perform();
    const mobileEmulation = await driver.findElement(By.css(`#WDxLfe > ul > li.VsJjtf.oXBWEc > div.oGuwee.eWDljc.RPRy1e.Mkt3Tc > ul > li:nth-child(10) > div > div > a`));             
    await driver.wait(until.elementLocated(By.css(`#WDxLfe > ul > li.VsJjtf.oXBWEc > div.oGuwee.eWDljc.RPRy1e.Mkt3Tc > ul > li:nth-child(10) > div > div > a`)), 5000);
    await mobileEmulation.click();
    const urlConsist = await driver.getCurrentUrl();
    expect(await urlConsist.includes('/mobile-emulation'));
  });
  
})