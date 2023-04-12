const TopNavigation = require('../page-objects/pageComponents/topNavigation');

 class LogIn {
    constructor(page) {
        this.page = page;    /// пробрасываем страницу на которую пойдем
        this.logInModalWindow = '.i-overlay_hidden .i-popup-login .i-popup_large'; /// модальное окно логина
        this.emailRegistrationMethod = '#loginFormLoginEmailLink'///выбор логина через email
        this.emailField = '//*[@id="loginForm"]/div[2]/div[1]/div[1]/input' /// email field
        this.passwordField = '//*[@id="loginForm"]/div[2]/div[1]/div[2]/input' /// password field
        this.enterButtonOnTheModalWindow = '//*[@id="loginForm"]/button' /// кнопка входа
        this.accountNumber = `//*[contains(text(),'oz31008140')]`   /// локатор с номером аккаунта
        this.topNavigation = new TopNavigation(page);   /// импортирую class TopNavigation
        this.errorPassword = `.i-input-group__popover_visible .i-popover_warning .i-popover__main .i-popover__line`  /// локатор об ошибке 
    }


    async logIn(logInText, passwordText) {          /// функция которая логинит 
        await (await this.topNavigation.enterButton()).click();  
        await this.page.click(this.emailRegistrationMethod);
        await this.page.click(this.emailField);
        await this.page.type(this.emailField, logInText, {delay: 100});
        await this.page.type(this.passwordField, passwordText, {delay: 100})
        await this.page.click(this.enterButtonOnTheModalWindow);
        
        }
        // colorBefore() {                                      //// не уверен что нужно 
        //     return this.passowordField.backgroundColor()
        // }
        // colorAfter() {
        //     return this.passowordField.backgroundColor()
        // }
    
        async logInCorrect (logInText, passwordText) {       /// функция которая логин верно
            await this.logIn(logInText, passwordText)
            await this.page.waitForSelector(this.accountNumber);
        } 
        async logInWrong (logInText, passwordText) {        /// функция которая логинит не верно                       
            await this.logIn(logInText, passwordText)            
            await this.page.waitForSelector(this.errorPassword)           
        }
 }
 
 module.exports = LogIn;