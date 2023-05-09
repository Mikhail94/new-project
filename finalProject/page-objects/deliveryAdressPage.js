const LogIn = require('../page-objects/logIn');
const PersonalSpace = require('../page-objects/personalSpace');

class DeliveryAdress {
    constructor(page) {
        this.page = page;
        this.logIn = new LogIn(page);
        this.personalSpace = new PersonalSpace(page);
        this.cityField = `#i-city`
        this.zipAddressField = `#i-zip`;
        this.streetAdressField =`//*[@id="i-street"]`;
        this.buildingNumberField = `#i-house`;
        this.flatNumberField = `#i-flat`;
        this.subbmitAddressButton = `.button-small`;
        this.existingAlreadyAdressesButton = `//*[@class='c-gray f11 filter-items cfix']//*[contains(text(),'Адреса доставки')]`;
        this.adressResultStreetBuildingFlat = `.b-addresses-list .active >h2 `;
        this.adressResultCityRegion =`.b-addresses-list .l-col-1 >p`; 
    }

    async addAddressDelivery (logInText, passwordText, zipAddress, street, building, flat) {  
        await this.logIn.logIn(logInText, passwordText)
        await this.page.click(await this.logIn.accountNumber)
        await this.page.click(await this.personalSpace.deliveryAddressesButton)
        await this.page.click(this.zipAddressField)
        await this.page.type(this.zipAddressField, zipAddress, {delay: 10});
        await this.page.click(this.streetAdressField)
        await this.page.type(this.streetAdressField, street, {delay: 10});     
        await this.page.click(this.flatNumberField)
        await this.page.type(this.flatNumberField, flat, {delay: 10});
        await this.page.click(this.buildingNumberField)
        await this.page.type(this.buildingNumberField, building, {delay: 10});        
        const cityFieldLocator = await this.page.$(this.cityField);
        const textCityField = await cityFieldLocator.getAttribute('value');
        await this.page.click(this.subbmitAddressButton)
        await this.page.click(this.existingAlreadyAdressesButton)
        const resultTextStreetBuildingFlat = await this.page.textContent(this.adressResultStreetBuildingFlat)
        const resultTextCityRegion = await this.page.textContent(this.adressResultCityRegion)
        return {textCityField, resultTextStreetBuildingFlat, resultTextCityRegion}
    }

}
module.exports = DeliveryAdress;