const TopNavigation = require('../page-objects/pageComponents/topNavigation');

class WriteToUsPage {
    constructor(page) {
        this.page = page;
        this.topNavigation = new TopNavigation (page);
        this.enterTextField = `//*[@id="inp-3"]`;
        this.nameField = `//*[@id="inp-1"]`;
        this.emailField = `//*[@id="inp-2"]`;
        this.captureCodeField = `//*[@id="inp-5"]`;
        this.sendButton = `.button-big`;
        this.errorMessage = `//*[@class = 'f11 attention-imp-p']/p`;
    }

    async writeToSupportWithWrongCapture (text, name, email, code) {
        await this.page.click (await this.topNavigation.writeToUsButton)
        await this.page.type(this.enterTextField, text, {delay: 10});
        await this.page.type(this.nameField, name, {delay: 10});
        await this.page.type(this.emailField, email, {delay: 10});
        await this.page.type(this.captureCodeField, code, {delay: 10});
        await this.page.click(this.sendButton);
    }

}
module.exports = WriteToUsPage;