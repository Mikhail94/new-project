const { expect } = require('chai');
const topNavigation = require('../pageobjects/components/topNavigation');
const basePage = require('../pageobjects/basePage');                              

describe('Webdriver IO tests', () => {                             

    beforeEach(async() => {                                                                                                                                        
        await browser.url('https://webdriver.io/');                                                  
    })

    // it('should go to the Docs page and recheck a new URL', async () => {                                                  
    //     const expectedUrl = 'https://webdriver.io/docs/gettingstarted';        
    //     await topNavigation.goToGettingStartedPage(`Docs`,expectedUrl);    
    //     const actualUrl = await topNavigation.actualUrl();
    //     expect(actualUrl).to.equal(expectedUrl);
    // })


    // it('should contain text after search on the header', async () => {                                           
    //     const searchWord = 'Testrunner'; 
    //     await topNavigation.containTextOnPage(searchWord);
    //     expect(await topNavigation.elementWithText().getText()).to.include(searchWord);
    // })   



    it('The text color should change', async () => {                                            
        const tabName = 'API';
        const { colorBefore, colorAfter } = await topNavigation.buttonCnangeColor(tabName);
        expect(colorBefore.value).to.not.equal(colorAfter.value);
    });
    


})

