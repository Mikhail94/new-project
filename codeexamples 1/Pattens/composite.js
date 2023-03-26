class Parts {                               /// супер класс запчастей
    getPrice() {                            /// принимает цену 
        return this.price || 0;
    }

    getName() {                             /// принимает
        return this.name;
    }

    setName(name) {                         /// возвращает имя
        this.name = name;
    }

    setPrice(price) {                       /// устанавливает цену 
        this.price = price;
    }
}                                           /// супер класс запчастей

class Cabin extends Parts {                 /// запчасть
    constructor() {
        super();
        this.setName('Cabin');
        this.setPrice(1000)
    }
}

class Transmission extends Parts {          /// запчасть
    constructor() {
        super();
        this.setName('Transmission');
        this.setPrice(2500)
    }
}

class Interier extends Parts {              /// запчасть
    constructor() {
        super();
        this.setName('Interier');
        this.setPrice(1800)
    }
}

class TurboEngine extends Parts {           /// запчасть
    constructor() {
        super();
        this.setName('Turbo engine');
        this.setPrice(5000)
    }
}

class Composite extends Parts {             /// компановщик 
    constructor() {
        super();
        this.parts = [];
    }

    add(part) {                            /// добавляем запчасти
        this.parts.push(part);
    }

    getPrice() {                            /// высчитываем стоимость
        return this.parts
            .map(part => part.getPrice())
            .reduce((a, b) => a + b)
    }
}

class Car extends Composite {
    constructor() {
        super();
        this.setName('WV');
    }

}

let car = new Car();                                    /// создаем новую машину 
car.add(new Transmission());                            /// компануем деталями
car.add(new Cabin());                                   /// компануем деталями
car.add(new Interier());                                /// компануем деталями

console.log(`${car.getName()} price is ${car.getPrice()}`)

// let car1 = new Car();                                   /// создаем новую машину
// car1.add(new Transmission());                           /// компануем деталями
// car1.add(new Cabin());                                  /// компануем деталями
// car1.add(new Interier());                               /// компануем деталями
// car1.add(new TurboEngine());                            /// компануем деталями               

// console.log(`${car1.getName()} price is ${car1.getPrice()}`)