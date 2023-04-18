class MainPage {
    constructor(page) {
        this.page = page;
        this.firstItem = `#category_goods_container_home #goods_block_home_1 .li_0` /// первый товар
        this.writeToUsButton = `//*[@class='dark border']`  /// кнопка "Напишите нам"

    }

    async navigate(url) {
        await this.page.goto(url);
    }
    async 

    async catalogDropDown () {                 /// функция которая возвращает определенный локатор из массива
        const catalogDropDownArray = await this.page.$$(`.catalog_menu_show`);
        const catalogDropDown = catalogDropDownArray[0];
        return catalogDropDown      
    }

    async elementFromDropDown (number) {        /// функция с элементом из дропдауна
        //const elementFromDropDownArray = await this.page.$(`//*[@id="dinamic_menu_home"]/div/ul/li[${number}]/a`);
        const elementFromDropDownArray = await this.page.$(`#dinamic_menu_home > div > ul > li:nth-child(${number}) > a`);   
        return elementFromDropDownArray
    } 


}

module.exports = MainPage;