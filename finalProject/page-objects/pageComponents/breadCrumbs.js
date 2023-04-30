class BreadCrumbs {
    constructor(page) {
        this.page = page;           
        this.lastOpenedBreadCrumbs = `//*[@class = 'breadcrumbs__list__li active last a-open ']`; 
        }
    
}
module.exports = BreadCrumbs;