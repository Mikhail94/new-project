let num = 10;
const str = 'string';
var bool = true;

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




























