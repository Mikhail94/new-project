// function add (a, b) {               /// приер функции
//     return (a+b);                   /// привер функции
//                                     /// привер функции
// }                                   /// привер функции
// console.log(add())                  /// привер функции
// console.log(add(2, 17))             /// привер функции


// (function (a, b) {                     /// пример самовызывающейся функции
//     console.log(2+10);                 /// пример самовызывающейся функции
//     return a+b;                        /// пример самовызывающейся функции
// })()                                   /// пример самовызывающейся функции

// (function newA (a, b) {                /// пример НЕ самовызывающейся функции
//     console.log(2+11);                 /// пример НЕ самовызывающейся функции
//     return a+b;                        /// пример НЕ самовызывающейся функции
// }) 


//  const array1 = [1,4,3,9,5,6,7];                             /// пример стрелочной функции   
// // const findNumber = array1.find(number => number === 4);     /// пример стрелочной функции 
// // console.log(findNumber);                                    /// пример стрелочной функции 
// const findNumber = array1.find(function(number){               /// тоже самое но с обычной функцией
//     return number === 4;                                        /// тоже самое но с обычной функцией
// })                                                              /// тоже самое но с обычной функцией
// console.log(findNumber);                                        /// тоже самое но с обычной функцией

// const obj = {                                              /// ПРИ ОБЫЧНОЙ ФУНКЦИИ КОНТЕКСТ ПОМЕЧАЕТСЯ tHIS           
//     name: 'You',
//     surname: 'B',
//     age: 19,
//     car: 'H',
//     greet: function() {
//         console.log(`My name is ${this.name} ${this.surname} I'am ${this.age} years old and I have a ${this.car}`) 
//     }
// }
// obj.greet();

//                                          ИЛИ
// greet: function() {
//     console.log(`My name is ${obj.name} ${obj.surname} I'am ${obj.age} years old and I have a ${obj.car}`) 
// }
// }
// obj.greet();

//                                     СТРЕЛОЧНАЯ ФУНКЦИЯ
//     greet: () => {                                                /// пристрелочной функции слова This не понимается 
//         console.log(`My name is ${this.name} ${this.surname} I'am ${this.age} years old and I have a ${this.car}`) 
//     }
// }
// obj.greet();
//                                     БЕРЕМ КОНТЕКСТ ИЗ ДРУГОГО ОБЪЕКТА 
// const obj1 = {                                                          /// Берем контекст из другого объекта        
//     name: 'Misha',                                                      /// Берем контекст из другого объекта
//     surname: 'Wolf',                                                    /// Берем контекст из другого объекта
//     age: 32,                                                            /// Берем контекст из другого объекта
//     car: 'W'                                                            /// Берем контекст из другого объекта
// }                                                                       /// Берем контекст из другого объекта
//     obj.greet.call(obj1)                                                /// Берем контекст из другого объекта



// const obj = {                                                                                                        
//     name: 'You',
//     surname: 'B',
//     age: 19,
//     car: 'H',
//     greet: function(aditionalText) {                                    /// передаем параметр в функцию
//         console.log(`My name is ${this.name} ${this.surname} I'am ${this.age} years old and I have a ${this.car} ${aditionalText}`) 
//     }
// }
// const obj1 = {                                                          /// Берем контекст из другого объекта        
//      name: 'Misha',                                                      /// Берем контекст из другого объекта
//      surname: 'Wolf',                                                    /// Берем контекст из другого объекта
//      age: 32,                                                            /// Берем контекст из другого объекта
//      car: 'W'                                                            /// Берем контекст из другого объекта
//  }                                                                       /// Берем контекст из другого объекта

//   obj.greet('qweqweqe')
//   obj.greet.call(obj1, 'abcdef');                                        /// передаем параметр c помощью CALL
//   obj.greet.apply(obj, ([123, 456, 789]));                               /// передаем параметр c помощью AppLY
//   const fun = obj.greet.bind(obj, 'zxc');                                /// передаем параметр с помощью BIND
//   fun();                                                                 /// выводим функцию с параметрами через Bind



//  function multuply(first, second) {                                     /// применение ARGUMENTS
//      let sum = first * second;                                          /// Можем обрабатывать неограниченноу количество атрибутов
//      for(let i = 0; i < arguments.length; i++) {
//          sum *= arguments[i]
//      }
//      return sum;
//  };

//   console.log(multuply(5, 7));

//  console.log(multuply(5, 7, 10, 12, 15))


// function multuply1(first, second, ...rest) {                           /// Использование REST
//     let sum = first * second;
//     for(let i = 0; i < rest.length; i++) {
//         console.log(rest[i])
//         sum *= rest[i]
//     }
//     return sum;
// }
// console.log(multuply1(10, 15))
// console.log(multuply1(10, 15, 7, 19, 20));


// function greeting(greet, name = 'Masha', surname = 'Yak', age = 22, car = 'BMW') {                               /// назначение параметра по умолчанию
//     console.log(`${greet} My name is ${name} ${surname}, I am ${age} years old and I have a car ${car}.`)
// }
// greeting('Hi');
// greeting('Hello','YA', "Bi", 34);


// function counter() {                                 /// счетчик. замыкание функции
//     let count = 0;
//     return function () {
//         return count++;
//     }
// }
// const newCounter = counter();
// console.log(newCounter())
// console.log(newCounter())
// console.log(newCounter())
// console.log(newCounter())
// console.log(newCounter())








































