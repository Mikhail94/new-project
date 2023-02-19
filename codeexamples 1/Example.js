// let num = 10;
// const str = 'string';
// var bool = true;

// let str1 = 'string';                    //// создание и присваивание переменной через литирал 
// let str2 = String('string')             /// создание и присваивание через объект 
// const obj = {};                         /// создание и присваивание переменной через литирал 
// const obj1 = Object.create({});         /// создание и присваивание через объект


//var myNumber = new Number (5);
//var myString = new String ('Helloworld' )     ///[String: 'Helloworld'] выведет в консоли 
//console.log(typeof myNumber);                 \\\ выведет в консоли object 
//console.log(myString);                        ///[String: 'Helloworld'] выведет в консоли


///var myNumber = 20,       /// можно присваивать переменные скопом
///    myString = 'str',
///    myBool = 'true'
///    myNull = null;
///console.log (myBool + myNumber + myString + myNull)


// const str = 'string';      /// не можем переасайнить Const
// str = 15;                 /// не можем переасайнить Const   


// let num1 = 20;          /// можем переасайнивать на другой тип данных
// num1 = 'abc';           /// выдаст abc
// num1 = true;              /// выдаст true
// num1 = null;             /// выдаст null
// console.log (num1);       ///


// console.log(newVar);        /// выдаст Undefind. У типа данных Var есть поднятие  
// var newVar = 15;           /// выдаст Undefind. У типа данных Var есть поднятие  
//console.log(newLet);       /// выдаст ошибку потому что у Let нету поднятия
//let newLet = 15;           /// выдаст ошибку потому что у Let нету поднятия


// let newLet = 15          /// 
// console.log(newLet);     /// выдаст 15
// newLet = 'Hello world';  /// 
// console.log(newLet);     ///затем выдаст hello world


///let symb = 'Hello';     ////   выдаст стринг. оператор typeof выводит тип даннх переменной
///console.log(typeof symb);     ///выдаст стринг. оператор typeof выводит тип даннх переменной
    ///let varNull = null;             ///выдаст object. Баг JS  
    ///console.log(typeof varNull);    ///выдаст object. Баг JS   
        //let obj = {};                   ///выдаст object.
        //console.log (typeof obj);       ///выдаст object.


//let newNull = null;
/// null == 0 //false   (баг в JS)
/// null > 0 // false
/// null >= 0 //true 
//console.log(null >= 0);


//console.log( {} instanceof Array);    /// проверяет является ли данный объект массивом 

//let n = 1000000000000000000000000000000000000000000000000n;      /// n на конце говорит о том что тип данных begint 
//console.log(typeof n);
//let n = 1000000000000000000000000000000000000000000000000;
//console.log(typeof n);


//console.log(parseInt('42'));          /// метод переводит строку в число
//console.log(parseInt('42@'));         /// метод переводит строку в число если есть даже за числом какой-то символ
//console.log(parseInt('42', 16));        /// метод переводит строку в число и в 16ти ричную систему исчисления


//let n = 1216351551515315;                   /// проверяет являетс ли число безопасным,  тоесть входит ли оно в 64 бита  
//console.log(Number.isSafeInteger(n));       /// проверяет являетс ли число безопасным,  тоесть входит ли оно в 64 бита  


/// Класс Math
//console.log(Math.sqrt(144));                /// математические штуки. в этом случае квадратный короень
//console.log(Math.ceil(1.2));                /// округление к верхнему числу 
//console.log(Math.floor(1.2));               ///округление к нижнему числу
//console.log(Math.round(1.2));               ///округление к ближайшему
//console.log(Math.pow(2, 3));                /// возведение в степень                  
//console.log(Math.sqrt(121));                /// извление квадратного корня
//console.log(Math.round(Math.random() * (100-1) + 1));     /// достает рандомное число с диапозоном от 1 до 100 c округлением 


// let n = 10;
// let str1 = "sting";
// console.log('hello world' + ' ' + n + ' new string' + ' ' + str1);     ///можно складывать строки первым путем 
// console.log(`hello world ${n} new string ${str1}`);                    ///можо складывать строки вторым путем


// const a = 'Hello';
// console.log(a[4]);                 /// выведет 4ый элемент из слова     
// console.log(a.charAt(4));          /// выведет 4ый элемент из слова
// console.log(a.indexOf('l'));       /// выведет индекс первой буквы L из слова
// console.log(a.lastIndexOf('l'));   /// выведет индекс последней буквы L из слова


//const a = 'hello world!';
//console.log(a.replace('hello' , 'hi'));     /// меняет часть символов в строке


//const a = 'hello world!';
//console.log(a.slice(0 , 3));            /// вырезает часть символов. вырезает на 1 меньше


///const a = 'HEllo world!';
///console.log(a.toLowerCase());        /// приводит все к нижнему регистру 
///console.log(a.toUpperCase());       /// приводит все к верхнему регистру 


//const a = '    HEllo world! ';
//console.log(a.trim());                ///убирает пробелы в начале и конце 


// const obj = {                           ///создание обекта 
//     name: 'Misha',                      ///создание обекта 
//     surname: 'Mishka',                   ///создание обекта 
//         move: () => {                       /// добавление функции к объекту 
//         return `I am runing`;           /// добавление функции к объекту
//     }
// }
// obj.age = 99;                           ///добавление к объекту 
// console.log(obj);
// console.log(obj.move());


// let a = Symbol ('asd');                 /// Symbol не равен ничему. даже самому себе
// let b = Symbol ('asd');                 /// Symbol не равен ничему. даже самому себе
// console.log(a === b);                   /// Symbol не равен ничему. даже самому себе
// let d = Symbol.for ('asd');                 /// Symbol будет равен через метод Symbol.for
// let c = Symbol.for ('asd');                 /// Symbol будет равен через метод Symbol.for
// console.log(d === c);                       /// Symbol будет равен через метод Symbol.for


//const array = ['string' , 10 , false , {} , [] , Symbol]              ///Js в массиве могут храниться разные типы данных
//const array1 = new Array(1 , 2 , true, 'str');                        /// обявление массива ччерез объект 
//console.log(array1);
//const array = ['string' , 10 , 'string2' , 'string3'];              /// метод join делает массив в строку
//console.log(array.join (','));                                      /// метод join делает массив в строку

//const array = [1, 6, 50, 12, 25, 2];                    /// сортировка массива из номеров
//console.log (array.sort((a,b) => a-b));                 /// сортировка массива из номеров
//console.log(array.push(60));                            /// выводит количество элементов в массиве. массив изменен добавляется в конце новое значение
//console.log(array);
//console.log(array.pop());                                /// удаляет последний элемент и показывает что он удаляет
//console.log(array);
//console.log(array.unshift(5));                          /// выводит количество элементов в массиве. массив изменен добавляется в начале новое значение
//console.log(array);
//console.log(array.shift(5));                          /// удаляет первый элемент и показывает что он удаляет
//console.log(array);


// function fun (num1, num2) {                          /// объявление функции
//     return num1 + num2;                             /// объявление функции
// }                                                   /// объявление функции
// console.log(fun(10 , 20))


//const age = 10;                                      /// использование циклов логических операторов if 
// if(age >= 18) {
//     console.log('Ok, you can go!')
// } else {
//     console.log('No, go away!')
// }

// if(age >= 18 && age < 65) {                         /// использование циклов логических операторов else if
//     console.log('Ok, you can go!')
// } else if(age >= 65) {
//     console.log('Greate your enter is free')
// } else {
//     console.log('No, go away!')
// }


//const month = 2;                                     /// использование логических операторов switch case что бы не писать много if else if 
// switch (month) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('February');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     default:
//         console.log('This is not a month')


// let num = 0;                                              /// цикл while так работает
// while(num <= 10) {
//     console.log(num);
//     num++;
// }

// do {                                                     /// цикл do while так работает
//     console.log(num);
//     num++;
// } while(num < 0)


// const array = [1, 6, 50, 12, 25, 2];                        /// цикл for так работает
// for(let i = 0; i < array.length; i++) {
//      console.log(array[i])
// }


// for(let value of arr1) {                                    /// цикл перебора for of в массиве 
//     console.log(value);
//     console.log(value + ' new sentences')
// }


// const ob3 = {                                              /// цикл перебора for in в массиве
//     name: 'Y',
//     surname: 'B',
//     car: 'X',
//     age: 19,
// }
// // for(let key in ob3) {
// //     console.log(ob3[key])
// // }


// try {                                                       /// обработка ошибки (не заданна переменная)
//     console.log(newVar);
//          let newVAr = 'new var';
//      } catch (err) {
//          console.error(`New error - ${err} !!!`)
//      }

// try {                                                       /// Сами генерерируем ошибку
//     let a = 10 / 0;
//     if(a === Infinity) {
//         throw new Error(`You can't divide by 0`)
//     }
// } catch(err) {
//     console.error(`There is a new ERROR - ${err} !!!`)
// } finally {
//     console.log(`I'll be always with you!!!`)
//}


// const date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(Date.now());
// console.log('CONTINUE');

//////////////////////////// тернарный оператор //////////////////////////////////////
//let age = 17;
// if(age > 18) {
//     console.log('Hello')
// } else {
//     console.log('GO away')
// }
//////////////////////// то же самое//////////////
// let result = age > 18 ? 'Hello' : 'Go away';     //// тернарный оператор 
// console.log(result)




