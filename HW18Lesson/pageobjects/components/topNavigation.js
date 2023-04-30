/// файл в котором описываем топ навгацию. создается отдельно потому что есть на всех страницах сайта
const BasePage = require('../basePage');                                        /// подтягиваем файл бэйспэдж

class TopNavigation extends BasePage {                                          /// создаем класс что бы собрать топнавигацию
    mainMenuTab(tabName) {                                                      /// функция с эдементом в которой мы будем передавать имя. {tabName}
        return $(`//*[text()='${tabName}']//ancestor::a[@class='ammenu-link']`)
    }

    mainMenuItem(itemName) {                                                   /// функция с эдементом в которой мы будем передавать имя. {itemName}     
        return $(`//div[@class='ammenu-text-block']/*[text()='${itemName}']`)
    }

    async goToProductListingPage(tabName, itemName) {                           /// создается функция в которую передаются параметры 
        await this.mainMenuTab(tabName).waitForDisplayed();                     /// ждем пока первый элемент будет доступен. в данном случае со своим параметром
        await this.mainMenuTab(tabName).moveTo();                               /// наводим на него
        await this.mainMenuItem(itemName).waitForDisplayed();                   /// ждем пока второй элемент будет доступен. в данном случае со своим параметром
        await this.mainMenuItem(itemName).click();                              /// кликаем 
    }
}

module.exports = new TopNavigation();                                           /// экспортируем файл