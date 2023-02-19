"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// function add(value1: number, value2: number): number {      /// указываем тип данных которой будет в этой функции. Number за скобками - тип возвращаемого значения
//     return value1 + value2; 
// }
// console.log(add(2, 4))                                      /// вседа нужно передавать все элементы 
// add(2);
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
class Vehicle {
    greet() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Hello');
            return 'Hello';
        });
    }
    ;
    add() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(2 + 3);
            return 2 + 3;
        });
    }
    addOne() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(true);
            return true;
        });
    }
    resolveFunction() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.greet();
            yield this.add();
            yield this.addOne();
        });
    }
}
// class Car extends Vehicle {
//     public variable;
//     private sum;
//     protected newSum;
//     readonly hello = 'Hello';
//     constructor() {
//         super();
//     }
//     public async resultFunction() {
//         await this.add();
//         await this.addOne()
//     }
// }
const vehicle = new Vehicle();
vehicle.addOne();
vehicle.resolveFunction();
// const car = new Car();
// // car.hello = 'new';
// abstract class Person {
//     static move() {
//         return 'I am running'
//     }
// }
// // const person = new Person();
// Person.move();
// interface CarInterface {
//     model: string,
//     speed: number,
//     color: string,
//     transmission: TransmissionInterface,
//     parktronicType?: string,
//     signalType?: string
// }
// interface NewCarInterface {
//     model: string,
//     speed: number,
//     color: string,
//     transmission: TransmissionInterface,
//     kuzow: string,
//     weight: number
// }
// const toyota: CarInterface = {
//     model: 'Camry',
//     speed: 220,
//     color: 'white',
//     transmission: {
//         automatic: true,
//         numberOfSpeeds: 6
//     },
// }
// type CarType = {
//     model: string,
//     speed: number,
//     color: string,
//     transmission: TransmissionInterface,
//     parktronicType?: string
// }
// interface TransmissionInterface {
//     automatic: boolean,
//     numberOfSpeeds: number
// }
// const honda: CarType = {
//     model: 'civic',
//     speed: 200,
//     color: 'silver',
//     transmission: {
//         automatic: false,
//         numberOfSpeeds: 6
//     },
// }
// type NewCarType = CarInterface | NewCarInterface;
// const audi: NewCarType = {
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
// let age = 17;
// // if(age > 18) {
// //     console.log('Hello')
// // } else {
// //     console.log('GO away')
// // }
// let result = age > 18 ? 'Hello' : 'Go away';
// console.log(result)
// export { toyota, audi };
