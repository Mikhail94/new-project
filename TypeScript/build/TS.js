"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
fs_extra_1.default.ensureDir(`./One`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let a = 25; /// пример переменных в TS
let s = 'str'; /// пример переменных в TS
let b = true; /// пример переменных в TS
let n = null; /// пример переменных в TS
let un; /// пример переменных в TS
let obj = {}; /// пример переменных в TS
let arr = ['str', '12']; /// пример переменных в TS
let arr1 = [5, 12]; /// пример переменных в TS
let any1 = 'string'; /// пример переменных в TS. В any  можно ложить любые типы данных 
let any2 = ['string', 12, true]; /// пример переменных в TS. В any  можно ложить любые типы данных 
// enum Color {                                  /// пример переменных с цветами
//     red = 'red', green = 2, blue = 3
// }
// let color = Color.red;
// console.log(color);
// console.log(Color.green);
// function print(message: string): void {                              ///если функция ничего не возвращает то используем Void
//     console.log(message);                                            /// функция ничего не возвращает
// }
// const arrTuple: [string, boolean, null, number, string] = ['str', true, null, 15, 'str'];       /// Typle тип данных
/////////////////////////////////////////////////примеры ////////////////////////////////////////////
function add(value1, value2) {
    return value1 + value2;
}
console.log(add(2, 4)); /// вседа нужно передавать все элементы 
add(2, 4);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function returnMessage(greet: string, name: string, age: number, aditionalMessage?: string): string {            /// ? говорит о том что этот параметр необязательный
//     return `${greet}, ${name}!!! Are you ${age} years old? ${aditionalMessage || ' '}`
// }
// console.log(returnMessage('Hello', 'Dasha', 18));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let newVar: number | string | boolean = 14;
// newVar = 'str';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function overload(value: string, value1: string): string;        /// заводим одну функцию
// function overload(value: number, value1: number): number;        /// заводим вторую функцию
// function overload(value, value1) {                              /// заводим общюю функцию
//     return value + value1;
// }
// console.log(overload('str', 'str'));
// console.log(overload(10, 14));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function consoleMessage<T>(message: T): string {                ///таким образом создается гинерик, когда мы не знаем какой тип данных там будет лежать
//     console.log(typeof message);
//     return typeof message;
// }
// consoleMessage('Hello');
// consoleMessage(123);
// consoleMessage(true);
// consoleMessage(null);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Vehicle {
//     private async greet(): Promise<string> {            /// будет доступна из класса где создается 
//         console.log('Hello')
//         return 'Hello'
//     };
//     protected async add(): Promise<number> {            /// будет доступна из класса где создается и из дочернего класса
//         console.log(2 + 3)
//         return 2 + 3;
//     }
//     public async addOne(): Promise<boolean> {           /// будет доступно везде
//         console.log(true)
//         return true;
//     }
//     public async resolveFunction() {                   /// вызываем все функции
//         await this.greet();
//         await this.add();
//         await this.addOne();
//     }
// }
// // class Car extends Vehicle {                      /// создаем наследуемый класс
// //     public variable;
// //     private sum;
// //     protected newSum;
// //     readonly hello = 'Hello';             /// константа. она будет такой всегда
// //     constructor() {
// //         super();
// //     }
// //     public async resultFunction() {
// //         await this.add();
// //         await this.addOne()
// //     }
// // }
// const vehicle = new Vehicle();
// vehicle.addOne();
// vehicle.resolveFunction();
// const car = new Car();
// // car.hello = 'new';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// abstract class Person {
//     static move() {
//         return 'I am running'
//     }
// }
// // const person = new Person();
// Person.move();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// interface CarInterface {                         /// создаем интерфейс
//     model: string,
//     speed: number,
//     color: string,
//     transmission: TransmissionInterface,
//     parktronicType?: string,                     /// необязательный параметр
//     signalType?: string                          /// необязательный параметр
// }
// interface TransmissionInterface {                    /// интерфейс для трансмиссии
//     automatic: boolean,
//     numberOfSpeeds: number
// }
// const toyota: CarInterface = {                   /// собираем машину 
//     model: 'Camry',
//     speed: 220,
//     color: 'white',
//     transmission: {                              /// добавляем трансмиссию с интерфейсом
//         automatic: true,
//         numberOfSpeeds: 6
//     },
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// type CarType = {                                 /// типы. работают так же как и интерфейс 
//     model: string,
//     speed: number,
//     color: string,
//     transmission: TransmissionInterface,
//     parktronicType?: string                      /// необязаиельный параметр
// }
// interface TransmissionInterface {                /// интерфейс для трансмиссии
//     automatic: boolean,
//     numberOfSpeeds: number
// }
// const honda: CarType = {                         /// собираем машину 
//     model: 'civic',
//     speed: 200,
//     color: 'silver',
//     transmission: {                             /// добаляем интерфейс
//         automatic: false,
//         numberOfSpeeds: 6
//     },
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// interface CarInterface {                         /// создаем интерфейс
//     model: string,
//     speed: number,
//     color: string,
//     transmission: TransmissionInterface,
//     parktronicType?: string,                     /// необязательный параметр
//     signalType?: string                          /// необязательный параметр
// }
// interface NewCarInterface {
//     model: string,
//     speed: number,
//     color: string,
//     transmission: TransmissionInterface,
//     kuzow: string,
//     weight: number
// }
// type NewCarType = CarInterface | NewCarInterface;        /// общий интерфейс который содержит в себе несколько интерфейсов
// const audi: NewCarType = {                               /// собираем машину из разных интерфейсов
//     model: 'Camry',
//     speed: 220,
//     color: 'white',
//     transmission: {
//         automatic: true,
//         numberOfSpeeds: 6
//     },
//     kuzow: 'string',
//     weight: 3000,
//     parktronicType: 'str'
// }
///////////////////////////////////////////тернарный опеератор /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let age = 17;
// // if(age > 18) {
// //     console.log('Hello')
// // } else {
// //     console.log('GO away')
// // }
//то же самое //
// let result = age > 18 ? 'Hello' : 'Go away';
// console.log(result)
// export { toyota, audi };
