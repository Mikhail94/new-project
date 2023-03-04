const {expect} = require(`chai`)                                // забираем функцию из chai
const {returnTrue} = require(`../../func`)                       /// принимаем функцию

describe ('our first test', function () {                       // это тестовый набор. Это функция которая принимает 2 параметра: Title и вызывается функция которая идет на исполнение 
    this.retries(4);                                            // количество раз которое тест должен отработать
    it ('function should return true true', async() => {       // здесь лежат тесты. это функция в которой будет лежать тест   
        const functionResult = returnTrue();
        expect (functionResult).to.equal(false)                 // ожидаемый результат
    })
})
