const TopNavigation = require('../page-objects/pageComponents/topNavigation');

class Contacts {
    constructor(page) {
        this.page = page;
        this.topNavigation = new TopNavigation(page);
        this.contactsButton = `//*[@class = 'f11 rubrics']//*[contains(text(), 'Контакты')]`; 
        this.informationWithEmails = `(//*[@class = 'for-editor new-editor']/p)[1]`; 
    }

    async observeContactsPage() {
        await this.page.click(await this.topNavigation.writeToUsButton);
        await this.page.click(await this.contactsButton);
        await this.page.pause(1000);
        const text = await this.page.$eval(await this.informationWithEmails, el => el.textContent);
        const regex = /[\w-]+@[\w-]+\.[\w-]+/g;
        const emails = text.match(regex);
        return emails;
    }

}
module.exports = Contacts;