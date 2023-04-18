class BreadCrumbs {
    constructor(page) {
        this.page = page;            
        this.lastOpenedBreadCrumbs = `//*[@class = 'breadcrumbs__list__li active last a-open ']`; /// локатор с полем воода текста по бренду     
        }
        

        async getTextFromBreadCrumb () {       /// ищет товары по бренду 
            const textlastBreadCrumb = await this.page.textContent(this.lastOpenedBreadCrumbs);
            return textlastBreadCrumb;
        }
       

   }
   module.exports = BreadCrumbs;      /// экспортируем класс