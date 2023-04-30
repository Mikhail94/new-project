class MainPage {
    constructor(page) {
        this.page = page;
        this.firstItem = `#category_goods_container_home #goods_block_home_1 .li_0`;
        this.OZstoresButton = `.main-nav__list__ul_last .main-nav__list__item_spec`;
        this.bonusProgrammButton = `//*[contains(text(),'Бонусная программа')]//ancestor::*[@class='top-panel__hnav__li top-panel__hnav__li_r']/a`;
        this.interteinmentAndArtButton = `//*[contains(text(),'Развлечения')]//ancestor::*[@class='main-nav__list__li main-nav__list__li_wnav']/a`;    
    }
    async navigate(url) {
        await this.page.goto(url);
    }
    async storesInMinsk (number) { 
         return (`(//*[@class = 'b-map-menu__list-scroller ps-container ps-active-y']//*[@class ='b-map-menu__link'])[${number}]`)      
    }
    async itemOntheMainPage (numberOfSection, numberOfItem) {
        return (`(//*[@class = 'mpgs-col-2'])[${numberOfSection}]//*[@class = 'b-mpgs-items mpgs-onerow']//*[@class = 'ligoods li_${numberOfItem}']` )
    }
    async ItemsFromMainSection  (numberOfMainSection) {
        return (`(//*[@class = 'main-nav__list__li main-nav__list__li_wnav'])[${numberOfMainSection}]`)
    }
    async catalogDropDown (numberOfDropdown) { 
        return (`(//*[@class = 'b-mpgs-cat catalog_menu_show'])[${numberOfDropdown}]`)
    }
    async elementFromDropDown (numberOfsection) { 
        return    (`(//*[@class = 'b-mpgs-cat b-mpgs-cat__hover catalog_menu_hide']//*[@class = 'b-mpgscat-ul']/li)[${numberOfsection}]/a `)
    }
    
}
module.exports = MainPage;