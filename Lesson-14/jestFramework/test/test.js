
// const {returnTrue} = require(`../../func`)                       /// принимаем функцию

// describe ('our first test', function () {                       // это тестовый набор. Это функция которая принимает 2 параметра: Title и вызывается функция которая идет на исполнение 
//     this.retries(4);                                            // количество раз которое тест должен отработать
//     it ('function should return true true', async() => {       // здесь лежат тесты. это функция в которой будет лежать тест   
//         const functionResult = returnTrue();
//         expect (functionResult).toEqual(false)                 // ожидаемый результат
//     })
// })
///////////////////////////////////////тест с тайм аутом////////////////////////////////////////////////

// const {returnTrue} = require(`../../func`)                       /// принимаем функцию

// describe ('our first test', function () {                       // это тестовый набор. Это функция которая принимает 2 параметра: Title и вызывается функция которая идет на исполнение 
                                              
//     it ('function should return true true', (done) => {         // здесь лежат тесты. это функция с таймаутом в которой будет лежать тест   
//         setTimeout (done,5000)                                  // тайм аут
//         const functionResult = returnTrue();
//         expect (functionResult).toEqual(false)                 // ожидаемый результат
//     })
// })

///////////////////////////прекондиции///////////////////////////////////////////////////////////


const {returnTrue} = require(`../../func`)                       /// принимаем функцию

describe ('our first test', function () {                       // это тестовый набор. Это функция которая принимает 2 параметра: Title и вызывается функция которая идет на исполнение 
                     
    beforeAll ( async () => {                                      // сначало он сделает какоие-то прекондиции
        console.log('print before all test')
    })
    afterAll ( async () => {                                      // отработает в самом конце после всех тестов
        console.log('print after all test')
    })
    beforeEach ( async () => {                                 // отработает перед каждым тестом
        console.log('print before Each test')
    })
    afterEach ( async () => {                                 // отработает после каждого теста
        console.log('print after Each test')
    })


            //////////  в jest можно писать it или test на ввыбор///////
    it ('function should return true true', async() => {       // здесь лежат тесты. это функция в которой будет лежать тест   
        console.log('first test')
        const functionResult = returnTrue();
        expect (functionResult).toEqual(true)                 // ожидаемый результат
    })

    it ('function should return true true', async() => {       // здесь лежат тесты. это функция в которой будет лежать тест   
        console.log('second test')
        const functionResult = returnTrue();
        expect (functionResult).toEqual(false)                 // ожидаемый результат
    })

    it ('function should return true true', async() => {       // здесь лежат тесты. это функция в которой будет лежать тест   
        console.log('third test')
        const functionResult = returnTrue();
        expect (functionResult).toEqual(true)                 // ожидаемый результат
    })
})



const { returnTrue } = require('../../func')

describe('first mocha test', function ()  {

    // beforeAll(async () => {
    //     console.log('Print before all tests');
    // });
    //
    // beforeEach(async() => {
    //     console.log('I print before EACH tests')
    // });
    //
    // afterEach(async() => {
    //     console.log('I print After EACH tests')
    // })
    //
    // afterAll(async() => {
    //     console.log('Print after all tests')
    // })

    test(`function should return true`, async () => {
        console.log('first test')
        const result = returnTrue();
        expect(result).toEqual(true);
    });

    test(`function should return true`, async () => {
        console.log('second test')
        const result = returnTrue();
        expect(result).toEqual(false);
    });

    test.each([[10, 5, 15],                                                     /// параметризация. когда мы можем делать тест разным количеством параметров  
    [20, 30, 50],
    [19, 18, 37]
    ])(`%d plus %d should be %d`, async (numberOne, numberTwo, result) => {
        expect(numberOne + numberTwo).toEqual(result);
    })
})