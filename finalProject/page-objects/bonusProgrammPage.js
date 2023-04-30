const MainPage = require('../page-objects/mainPage');
const Helper = require('../page-objects/helpers/helper');

class BonusProgrammPage {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage(page);
        this.helper = new Helper(page);
        this.bonusProgrammRules = `.faq__bonus-rules`   
    }
    async faqDropDown (number) {
        return (`(//*[@class='spoiler__header'])[${number}]`)
    }
    async faqConteiner (number) {
        return (`(//*[@class = 'spoiler__content'])[${number}]`)
    }

    async findOutAboutBonusProgramm (number, page) {  
        await this.page.click (await this.mainPage.bonusProgrammButton)
        await this.page.click(await this.faqDropDown(number))
        await this.page.isVisible(await this.faqConteiner(number))
        const bonusProgrammLink = await this.page.$(this.bonusProgrammRules);
        const urlFromBonusProgrammRules = await bonusProgrammLink.getAttribute('href');
        await this.page.click (await this.bonusProgrammRules);
        const curentUrl = await this.helper.getUrlofTheTab(page)
        return {urlFromBonusProgrammRules, curentUrl}
    }
    
}
module.exports = BonusProgrammPage;