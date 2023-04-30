const BasePage = require('./basePage');                                     /// подтягиваем файл бэйспэдж

class MainPage extends BasePage {                                           /// создаем класс наследуемый из BasePage
    constructor() {                                                         /// конструктор     
        super();
        this.watchMoreCargoButton = '.slick-active .our-solutions_content_link'  /// локатор 
    }

    get bigListSales() {                                                         /// локатор
        return $('.salesBig-lists_content__link');
    }

    get nextItemPagination() {                                                  /// локатор
        return $$('#amasty-shopby-product-list .icon-arrow-next');
    }

    get previousItemPagination() {                                              /// локатор
        return $$('#amasty-shopby-product-list .icon-arrow-prev');
    }
}

module.exports = new MainPage();                                                /// экспортируем файл