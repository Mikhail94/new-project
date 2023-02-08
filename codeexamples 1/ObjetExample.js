const person = {                                                //// пример объекта
    name: 'Ya',
    surname: 'Bi',
    car: 'Toyota',
    age: 30,
    _isMarried: true,
    nation: 'Bel',
    voice: function () {                                        ///функция внутри объекта
        console.log(`Hello, ${this.name} ${this.surname}`);
    },
    family: {                                                   /// обЪект внутри объекта
        isKidding: true,
        numberOfChildren: 1,
        firstKid: {                                             /// объект внутри объекта

        }
    },
     getName: function () {
         return this.name;
     },
     setName: function (newName) {
         this.name = newName;
     },
    // array: [],
    // toString: function () {
    //     return 'String';
    // }
}
//console.log(person.nation)
//  console.log(person.age);
//  console.log(person['car']);
//  person.voice();

// person.car = 'Tesla'                                 /// изменение значения в ключе name 
// console.log(person['car']);
// person.age = 31;
// console.log(person.age);

// for(let key in person) {                             /// перебирается значения в объекте 
//     console.log(person[key])                         /// перебирается значения в объекте
// }
// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))
//  console.log(person.toString())
//  console.log(person.valueOf())

// console.log(Object.getOwnPropertyDescriptor(person, 'name'))      /// смотрим на свойства значения (записываемось, перебираемость и конфигурабельность)

// Object.defineProperty(person, 'name', {                          /// ключ-значение делается не перезаписываемым
//     writable: false
// })
//
// console.log(Object.getOwnPropertyDescriptor(person, 'name'))     /// ключ-значение делается не видимым
//
// person.name = 'Masha'

// Object.defineProperty(person, 'name', {                  
//     enumerable: false
// });

// Object.defineProperty(person, 'name', {                
//     configurable: false
// })
 person.name = 'Masha'
// for(let key in person) {
//     console.log(person[key])
// }
 console.log(person);
 //console.log(person.getName());

// Object.defineProperty(person, 'name', {
//     writable: false
// });

person.setName('Natasha');
console.log(person.getName())
//console.log(person.toString())







