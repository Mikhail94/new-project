const SearchComponent = require('./components/searchComponent')

class MainPage {
    constructor() {
        this['Search Component'] = new SearchComponent();       /// забираем все локаторы в виде объекта со страницы SearchComponent
    }
}

module.exports = MainPage;