class BreadCrumbs {
    constructor(page) {
        this.page = page;
        this.goToHomeButton = `//*[@class='breadcrumbHomeIcon_YNFT']//ancestor::*[@class = "breadcrumbs__link"]`;
    }

}   
module.exports = BreadCrumbs;
