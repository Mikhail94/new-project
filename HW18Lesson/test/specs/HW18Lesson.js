const { expect } = require('chai');                              

describe('Webdriver IO tests', () => {                             

    beforeEach(async() => {                                                                                                                                        
        await browser.url('https://webdriver.io/');                                                  
    })

    it.skip('should go to the Docs page and recheck a new URL', async () => {                                                  
        await $(`//*[@class='navbar__items']//*[contains(text(),'Docs')]`).click();                              
        const expectedUrl = 'https://webdriver.io/docs/gettingstarted'
        const actualUrl = await browser.getUrl()
        expect(actualUrl).equal(expectedUrl)
    })

    it.skip('should contain text after search on the header', async () => {                                             
        await $(`//*[@class='DocSearch DocSearch-Button']`).click()
        await ($(`//*[@class='DocSearch-Form']//*[@class='DocSearch-Input']`).setValue('Testrunner'),1000);                              
        await $(`//*[@id="docsearch-item-0"]/a/div`).click();
        await browser.keys(['Enter']);                                                                  
        await $(`//*[@class='theme-doc-markdown markdown']/header/h1`).waitForDisplayed();                                
        await expect(await $(`//*[@class='theme-doc-markdown markdown']/header/h1`).getText()).to.contain('Testrunner')   
    })    

    it('The text color should change', async () => {                                             
        const elem = $(`//*[@class='navbar__items']//*[contains(text(),'API')]`);
        await $(`//*[@class='navbar__items']//*[contains(text(),'API')]`).waitForDisplayed();
        const colorBefore = elem.getCSSProperty('color');
        await $(`//*[@class='navbar__items']//*[contains(text(),'API')]`).click();
        const colorAfter = elem.getCSSProperty('color');
        expect(colorBefore).to.not.equal(colorAfter);
    })


})

