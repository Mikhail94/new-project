/////////////////////////////////////////////////пример промиса///////////////////////////////////////////////
// const status = 200;                             /// заводим перемеенную
// let a = new Promise((res, rej) => {             /// заводим промис с функцией 
//     if(status === 200) {                        /// условие 
//         res({
//             status: 200,
//             data: {
//                 name: 'Yauhen',
//                 age: 30
//             }
//         })
//     } else {
//         rej(`status code equal ${status}`)
//     }
//     })
//     console.log(a)                              /// выводим промис 

/////////////////////////////////////////////////пример промиса 2///////////////////////////////////////////////
    // const status = 200;
    // let a = new Promise((res, rej) => {
    //     if(status === 200) {
    //         res({
    //             status: 200,
    //             data: {
    //                 name: 'Yauhen',
    //                 age: 17
    //             }
    //         })
    //     } else {
    //         rej(`status code equal ${status}`)
    //     }
    //     })
    //     .then(data => {
    //         console.log(data);
    //         // throw new Error('This is my Error');                                 /// сгенерировали свою ошибку
    //         if(data.data.age > 18) {
    //             return `You can buy a ticket`
    //         } else {
    //             return `You can't buy a ticket. Go away`
    //         }
    //     })
    //     .then((str) => {
    //         console.log(str)
    //         if(str === `You can buy a ticket`) {
    //             return 300
    //         } else {
    //             return 'Go away'
    //         }
    //     })
    //     .then(num => {
    //         console.log(num)
    //     })
    //     .catch(err => {                                                     /// обрабатываем ошибку. отлавливаем все ошибки со всех блоков 
    //         console.log(`We have new Error ${err}. What a fuck!!!`)          
    //     })
    //     .finally(() => {                                                    /// значение которое будет выводится всегдв
    //         console.log('Goodbye')
    //     })
    
    // console.log(a);

//////////////////////////создание папки с помощью промисов ////////////////////////////////
// Promise.resolve(fse.ensureDir('./DirOne'))                              //// создает сразу отрезолвленный промис 
//     .then(() => {
//         return fse.ensureDir('./DirTwo')
//     })
//     .then(() => {
//         return fse.createFile('./DirOne/test.txt')
//     })
//     .then(() => {
//         return fse.move('./DirOne/test.txt', './DirTwo/test.txt')
//     })
//     .then(() => {
//         return fse.ensureDir('./DirThree')
//     })
//     .then(() => {
//         return fse.copy('./DirTwo/test.txt', './DirThree/test.txt')
//     })
//     .then(() => {
//         fse.remove('./DirOne');
//         fse.remove('./DirTwo');
//         fse.remove('./DirThree');
//     })

// Promise.reject('This promise rejected')                                         /// промис если отклонено
//     .catch(err => {                                                             /// отлавливаем и обрабатываем ошибки
//         console.log(`Error ${err}`)
//     });

//////////////////////////////////////////////////////////////////////отрабатывание промисов по таймауту////////////////////////////////////////////////////////////////////
// let prRes4 = new Promise((res, rej) =>                      /// заводим промис
//     setTimeout(() => {                                      /// сэт таймаут
//         res('One')
//     }, 500)
// );

// let prRes5 = new Promise((res, rej) =>                      /// заводим промис
//     setTimeout(() => {                                      /// сэт таймаут
//         res('Two')
//     }, 300)
// );

// let prRes6 = new Promise((res, rej) =>                      /// заводим промис
//     setTimeout(() => {                                      /// сэт таймаут
//         rej('Reject Three')
//     }, 300)
// );

//  Promise.race([prRes4, prRes5, prRes6])                     /// заводим промис с методом Race. покажет тот промис что отпаботает быстрее 
//      .then(data => {
//          console.log(data)
//      })
//      .catch(err => {
//          console.log(`error ${err}`)
//      })

// Promise.allSettled([prRej, prRes, prRes2, prRes3, prRes4, prRes5, prRes6])  //// метод который вернет массив всех промисов 
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

// Promise.any([prRej1, prRes, prRes2, prRes3, prRes4, prRes5, prRes6])        /// метод еоторый вернет первый зарезолвленный промис 
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после
// которой промис должен зарезолвится (то есть выполнится успешно).

// let data = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Success')
//     }, 3000)
// })
//     .then(data => {
//         console.log(data);
//     })
// console.log(data);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после которой промис
// должен зареджектится (то есть выполнится с ошибкой).

// let data = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej('Error')
//     }, 3000)
// })
//     .catch((err) => {
//         console.log(err)
//     })
// console.log(data);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так, чтобы
// сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
// Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6
// до 10.

// function returnRandomNumber(min, max) {                                        /// функция генерирует случайное число                     
//     let result = Math.floor(Math.random() * (max -  min + 1) + min);
//     console.log(result)
//     return result;
// }

// new Promise((res, rej) => {                                          /// новый промис
//     const randomNumber = returnRandomNumber(1, 10);                  /// объявляем переменную где будем хранить рандомное число
//     setTimeout(() => {                                               /// устанавливаем там аут
//         if(randomNumber >= 1 && randomNumber < 5) {                  /// условие 
//             res('Success ---- ' + randomNumber)
//         } else {
//             rej('Error --- ' + randomNumber)
//         }
//     }, randomNumber * 100)                                           /// тайм аут
// })
//     .then((data) => {                                                /// брабатываем данные 
//         console.log(data)                                            /// выводим данные
//     })
//     .catch(err => {                                                  /// отлавливаем ошибку
//         console.log(err)
//     })
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью
// Promise.all получите массив результатов, найдите его сумму, выведите на экран.

// const promOne = returnResult()                                  /// создаем переменную которая будет вызывать функцию
// const promTwo = returnResult()                                  /// создаем переменную которая будет вызывать функцию
// const promThree = returnResult()                                /// создаем переменную которая будет вызывать функцию

// function returnResult() {                                       /// создаем функцию которая будет вызывать промис 
//     return new Promise((res) => {
//         const timeout = returnRandomNumber(1, 5);
//         setTimeout(() => {
//             res(timeout)
//         }, timeout * 1000);
//     })
// }

// Promise.all([promOne, promTwo, promThree])
//     .then((data) => {
//         const res = data.reduce((prev, cur) => prev + cur, 0)
//         console.log(data, res)
//     })

///




















