// const person = {                                                //// пример объекта
//     name: 'Ya',
//     surname: 'Bi',
//     car: 'Toyota',
//     age: 30,
//     _isMarried: true,
//     nation: 'Bel',
//     voice: function () {                                        ///функция внутри объекта
//         console.log(`Hello, ${this.name} ${this.surname}`);
//     },
//     family: {                                                   /// обЪект внутри объекта
//         isKidding: true,
//         numberOfChildren: 1,
//         firstKid: {                                             /// объект внутри объекта

//         }
//     },
//      getName: function () {
//          return this.name;
//      },
//      setName: function (newName) {
//          this.name = newName;
//      },
//      array: [],
    // toString: function () {
    //     return 'String';
    // }
//}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  console.log(person.nation)
//  console.log(person.age);
//  console.log(person['car']);
//  person.voice();

// person.car = 'Tesla'                                 /// изменение значения в ключе name 
// console.log(person['car']);
// console.log(person.car);

// person.age = 31;
// console.log(person.age);

//   for(let key in person) {                             /// перебирается значения в объекте. выводится все что есть в объекте 
//       console.log(person[key])                         /// перебирается значения в объекте. выводится все что есть в объекте 
//   }
//  console.log(Object.keys(person))
//  console.log(Object.values(person))
//  console.log(Object.entries(person))
//  console.log(person.toString())
//  console.log(person.valueOf())

// console.log(Object.getOwnPropertyDescriptor(person, 'name'))      /// смотрим на свойства значения (записываемось, перебираемость и конфигурабельность)

//   Object.defineProperty(person, 'name', {                          /// ключ-значение делается не перезаписываемым
//       writable: false
//   })
//   console.log(Object.getOwnPropertyDescriptor(person, 'name'))     
//   person.name = 'Masha'
//   console.log(person)


// Object.defineProperty(person, 'name', {                          /// ключ-значение делается не видимым
//     enumerable: false
// });
// person.name = 'Masha'
// for(let key in person) {
//     console.log(person[key])
// }
// console.log(person);



// Object.defineProperty(person, 'name', {                             /// нельзя не перечисличить, ни удалить
//     configurable: false
// })
//  person.name = 'Masha'
//  for(let key in person) {
//      console.log(person[key])
//  }
//  console.log(person);
//  console.log(person.getName());                                   /// Забираем name

// // Object.defineProperty(person, 'name', {
// //     writable: false
// // });

//  person.setName('Natasha');
//  console.log(person.getName())
//  console.log(person.toString())


    /////////////////////////////////    Прототипы 
// const obj1 = Object.create({});                 /// заводим объект 1 
// const obj2 = {prop: 'Property'};                /// заводим объект 2
// const obj3 = Object.create(obj2);               /// заводим объект 3 от прототипа объекта 2

//  console.log(obj1);
//  console.log(obj2);
//  console.log(obj3);
//  console.log(obj3.prop);

//  console.log(obj2.isPrototypeOf(obj1))          /// является ли объект 2 прототипом для объета 1. нет
//  console.log(obj2.isPrototypeOf(obj3))          /// является ли объект 2 прототипом для объета 3. да

// obj2.car = 'R'
// console.log(obj3.car);



// const car = {                                       /// создаем объект                    
//     init: function (color, model) {                 /// инициализируем патерн с функцией 
//         this.color = color;                         /// свойство
//         this.model = model;                         /// свойство
//     },
// }
//     const newCar = Object.create(car);              /// создаем объект из объекта
//     const newNewCar = Object.create(car);           /// создаем объект 2 из объекта
//     newCar.init('Red', 'S')                         /// инициализируем свойства 
//     newCar.init('Green', 'M')                       /// инициализируем свойства 
//     console.log(newCar);
//     console.log(newCar.color);
//     console.log(newCar.model);


    
    // class Animal {                                   ///// создаем класс
    //     constructor(type, color) {                   //// используем конструктор 
    //         this.type = type;
    //         this.color = color;
    //         this.mamel = true;
    //     }    
    //     voice() {                                     //// метод
    //         console.log('Voice')
    //     }
    //  }    
    //  const bear = new Animal('bear', 'brown')        //// создаем животное со своими свойствами
    //  console.log(bear);
    // const cat = new Animal('cat', 'white')           //// создаем животное со своими свойствами
    // console.log(cat);
    // cat.voice();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    class Animal {                                   ///// создаем класс
        constructor(type, color) {                   //// используем конструктор 
            this.type = type;
            this.color = color;
            this.mamel = true;
        }    
        voice() {                                     //// метод
            console.log('Voice')
        }
     } 
    class Predator extends Animal {                     /// создаем новых животных хищников как класс "EXTENDS" слово для унаследования
         #bearChild = false;                          /// можно поменять только с помощью set. на прямую нельзя обращаться
         bearWife = true;
        constructor(type, color, eyes) {               /// используем конструктор
            super(type, color);                        /// 'Super' принимает из Animal. забирает свойства из прототипа все
            this.predator = true;
            this.eyes = eyes
        }    
        startHunt() {
            return 'Predator start hunt';
        }
    
        voice() {
            console.log('Bear Voice')
        }
    
        get() {
            return this.#bearChild;
        }
    
        set(status) {
            this.#bearChild = status;
        }
    }
    const bear = new Predator('bear', 'brown', 'green')

    bear.voice();
    console.log(bear);
    console.log(bear.startHunt());
    console.log(bear.bearWife);
    // console.log(bear.#bearChild);
    // console.log(bear.bearChild);
    console.log(bear.get());
    console.log(bear.set(true));
    console.log(bear.get());



///






















