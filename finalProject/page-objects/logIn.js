const TopNavigation = require('../page-objects/pageComponents/topNavigation');

 class LogIn {
    constructor(page) {
        this.page = page; 
        this.topNavigation = new TopNavigation(page);
        this.logInModalWindow = '.i-overlay_hidden .i-popup-login .i-popup_large';
        this.emailRegistrationMethod = '#loginFormLoginEmailLink';
        this.emailField = '//*[@id="loginForm"]/div[2]/div[1]/div[1]/input';
        this.passwordField = '//*[@id="loginForm"]/div[2]/div[1]/div[2]/input';
        this.enterButtonOnTheModalWindow = '//*[@id="loginForm"]/button';
        this.accountNumber = `//*[contains(text(),'oz31008140')]`;
        this.errorPassword = `.i-input-group__popover_visible .i-popover_warning .i-popover__main .i-popover__line`;
    }

    async logIn(logInText, passwordText) { 
        await this.page.click(await this.topNavigation.enterButtonLocator);  
        await this.page.click(this.emailRegistrationMethod);
        await this.page.click(this.emailField);
        await this.page.type(this.emailField, logInText, {delay: 10});
        await this.page.type(this.passwordField, passwordText, {delay: 10})
        await this.page.click(this.enterButtonOnTheModalWindow);
    }

} 
module.exports = LogIn;