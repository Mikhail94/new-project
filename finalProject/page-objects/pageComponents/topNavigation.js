 class TopNavigation {
     constructor(page) {
         this.page = page;    /// пробрасываем страницу на которую пойдем 
         this.enterButtonLocator = '.top-panel__userbar__auth'; /// локатор с кнопкой входа
         this.basketButton = '.top-panel__userbar__cart__item';     /// локатор кнопки корзины
         this.basketAmountLocator = `.top-panel__userbar__cart__count`; /// локатор с количеством товаров в корзине
         this.favouriteAmountLocator = `.top-panel__userbar__dlink--slink`; /// локатор с количеством товаров избранном
         this.mainSearchField = `.ui-autocomplete-input`    /// локатор серча
         this.mainSearchDropDown = `//*[@id="ui-id-1"]`    /// локатор с дропдауном из главного серча
        
        }
        enterButton() {           /// функция которая возвращвет  селектор enterButtonLocator
    return this.page.waitForSelector(this.enterButtonLocator);
        }

        async searchItem (searchText) {         /// функция которая осуществляет поиск товара
            await this.page.type(this.mainSearchField, searchText, {delay: 100});
            await this.page.click(this.mainSearchDropDown)
        }

    }


    module.exports = TopNavigation;      /// экспортируем класс





         //     this.topNavSubLinks = async (subLinkName) => {
    //         return `//*[@class='top-navigation__sub-link' and text()="${subLinkName}"]`
    //     };
    //     this.breadCrumbLink = async (breadCrumbName) => {
    //         return `//*[@class='breadcrumbs__link' and text()="${breadCrumbName}"]`
    //     }
     

    // async goToPageWithTopNavMenu(linkNumber, subItemTitle) {            /// функция которая будет работать в тесте. в ней аргумент 
    //     await this.page.locator('.top-navigation__item-link').nth(linkNumber).hover(); /// ждем элемент с номером из аргумента. наводим 
    //     await this.page.locator(await this.topNavSubLinks(subItemTitle)).click();   /// ждем элемент который будет содержать какой-то текст. Кликаем
    //     await this.page.waitForSelector(await this.breadCrumbLink(subItemTitle))
//      }
