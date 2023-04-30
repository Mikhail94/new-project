const BasePage = require('./basePage');                         /// передаем файл basePage
const BaseElements = require('../helpers/baseElements')         /// передаем файл baseElements

class ProductListingPage extends BasePage {                     /// создаем класс наследуемый из BasePage где храним локаторы и функцию
    get sortDropdown() {                                        /// функция локатора 
        return $(`.sorter .select2-selection--single`);         
    }

    sortOptions(sortOption) {                                   /// функция локатора с параметром 
        return $(`//li[text()="${sortOption}"]`)                /// локатор со встроенным параметром
    }

    async chooseSortingOption(option) {                         /// создаем функию котороая выбирает опцию сортировки 
        await BaseElements.click(this.sortDropdown)             /// ожидаем BaseElements и нажимаем sortDropdown из этого же конструктора
        // await this.sortDropdown.waitForDisplayed()
        // await this.sortDropdown.click();
        await this.sortOptions(option).waitForClickable()       /// ожидаем пока элемент sortOptions не будет кликабельным. он с параметром 
        await this.sortOptions(option).click()                  /// кликаем по элементу sortOptions
    }
}

module.exports = new ProductListingPage();                      /// экспортируем 