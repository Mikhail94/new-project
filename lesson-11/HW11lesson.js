// Авиакомпания. Определить иерархию самолетов. Создать авиакомпанию.
// Посчитать общую вместимость и грузоподъемность. Провести сортировку
// самолетов компании по дальности полета. Найти самолет в компании,
// соответствующий заданному диапазону параметров.

class Planes {                           /// супер класс самолет
    getСapacity() {                          /// принимает вместимость 
        return this.capacity;
    }

    getName() {                             /// принимает имя
        return this.name;
    }

    setName(name) {                         /// возвращает имя
        this.name = name;
    }

    setСapacity(capacity) {                 /// устанавливает вместимость 
        this.capacity = capacity;
    }
    getLoadcapacity() {                     /// принимает грузоподъемность
        return this.loadCapacity;
    }

    setLoadcapacity(loadCapacity) {         /// возвращает грузоподъемность
        this.loadCapacity = loadCapacity;
    }
}            
class Plane1 extends Planes {                  
    constructor() {
        super();
        this.setName('Plane1');
        this.setСapacity(1)
        this.setLoadcapacity(9)
    }
}
class Plane2 extends Planes {             
    constructor() {
        super();
        this.setName('Plane2');
        this.setLoadcapacity(2)
        this.setСapacity(8)
    }
}
class Plane3 extends Planes {              
    constructor() {
        super();
        this.setName('Plane3');
        this.setLoadcapacity(3)
        this.setСapacity(7)
    }
}
class Plane4 extends Planes {              
    constructor() {
        super();
        this.setName('Plane4');
        this.setLoadcapacity(4)
        this.setСapacity(5)
    }
}
class Plane5 extends Planes {             
    constructor() {
        super();
        this.setName('Plane5');
        this.setLoadcapacity(6)
        this.setСapacity(5)
    }
}
class Airport extends Planes {             /// компановщик 
    constructor() {
        super();
        this.planes = [];
    }

    add(plane) {                            /// добавляем запчасти
        this.planes.push(plane);
    }

    // getPrice() {                            /// высчитываем стоимость
    //     return this.parts
    //         .map(part => part.getPrice())
    //         .reduce((a, b) => a + b)
    // }
}
// class Airport extends Composite {
//     constructor() {
//         super();
//         this.setName('WV');
//     }
// }
let aircompany = new Airport();                                    /// создаем новую машину 
aircompany.add(new Plane1());                            /// компануем деталями
aircompany.add(new Plane2());                                   /// компануем деталями
aircompany.add(new Plane3());
aircompany.add(new Plane4());
aircompany.add(new Plane5());

console.log(plane1)
//console.log(`${plane1.getName()} has Сapacity  ${plane1.setСapacity()} and has Loadcapacity ${plane1.setLoadcapacity()}`)















