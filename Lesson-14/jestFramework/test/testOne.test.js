const {returnTrue} = require(`../../func`);                       /// принимаем функцию
const {expect} = require('chai');

describe ('our first test', function () {                       // это тестовый набор. Это функция которая принимает 2 параметра: Title и вызывается функция которая идет на исполнение 
                     
    // beforeAll ( async () => {                                      // сначало он сделает какоие-то прекондиции
    //     console.log('print before all test')
    // })
    // afterAll ( async () => {                                      // отработает в самом конце после всех тестов
    //     console.log('print after all test')
    // })
    // beforeEach ( async () => {                                 // отработает перед каждым тестом
    //     console.log('print before Each test')
    // })
    // afterEach ( async () => {                                 // отработает после каждого теста
    //     console.log('print after Each test')
    // })


            //////////  в jest можно писать it или test на ввыбор///////
    it ('function should return true true', async() => {       // здесь лежат тесты. это функция в которой будет лежать тест   
        console.log('first test')
        const functionResult = returnTrue();
        expect (functionResult).to.equal(true)                 // ожидаемый результат
    })

    it ('function should return true true', async() => {       // здесь лежат тесты. это функция в которой будет лежать тест   
        console.log('second test')
        const functionResult = returnTrue();
        expect (functionResult).to.equal(false)                 // ожидаемый результат
    })

    it ('function should return true true', async() => {       // здесь лежат тесты. это функция в которой будет лежать тест   
        console.log('third test')
        const functionResult = returnTrue();
        expect (functionResult).to.equal(true)                 // ожидаемый результат
    })
})