// Авиакомпания. Определить иерархию самолетов. Создать авиакомпанию.
// Посчитать общую вместимость и грузоподъемность. Провести сортировку
// самолетов компании по дальности полета. Найти самолет в компании,
// соответствующий заданному диапазону параметров.

class Planes {                           
    getСapacity() {                           
        return this.capacity;
    }

    getName() {                             
        return this.name;
    }

    setName(name) {                         
        this.name = name;
    }

    setСapacity(capacity) {                  
        this.capacity = capacity;
    }
    getLoadcapacity() {                     
        return this.loadCapacity;
    }

    setLoadcapacity(loadCapacity) {         
        this.loadCapacity = loadCapacity;
    }

    getDistance() {                     
        return this.distance;
    }

    setDistance(distance) {         
        this.distance = distance;
    }
}            
class Plane1 extends Planes {                  
    constructor() {
        super();
        this.setName('Plane1');
        this.setСapacity(1000)
        this.setLoadcapacity(1500)
        this.setDistance(5000)
    }
}
class Plane2 extends Planes {             
    constructor() {
        super();
        this.setName('Plane2');
        this.setLoadcapacity(1100)
        this.setСapacity(1400)
        this.setDistance(4000)
    }
}
class Plane3 extends Planes {              
    constructor() {
        super();
        this.setName('Plane3');
        this.setLoadcapacity(1000)
        this.setСapacity(1500)
        this.setDistance(5000)
    }
}
class Plane4 extends Planes {              
    constructor() {
        super();
        this.setName('Plane4');
        this.setLoadcapacity(1100)
        this.setСapacity(1100)
        this.setDistance(6000)
    }
}
class Plane5 extends Planes {             
    constructor() {
        super();
        this.setName('Plane5');
        this.setLoadcapacity(1100)
        this.setСapacity(900)
        this.setDistance(5000)
    }
}
class Airport extends Planes {              
    constructor() {
        super();
        this.planes = [];
    }

    add(plane) {                            
        this.planes.push(plane);
    }

    getСapacity() {                            
        return this.planes
            .map(plane => plane.getСapacity())
            .reduce((a, b) => a + b)
    }
    getLoadcapacity() {                            
        return this.planes
            .map(plane => plane.getLoadcapacity())
            .reduce((a, b) => a + b)
    }
    getDistance() {                                             
        return this.planes 
        .sort((a, b) => a.getDistance() - b.getDistance())
        .map(plane => plane.getName())
    }
    getName() {                                             
        return this.planes  
       .map(plane => plane.getName())   
    }    
}
 
let aircompany = new Airport();                                     
aircompany.add(new Plane1());                                       
aircompany.add(new Plane2());                                       
aircompany.add(new Plane3());
aircompany.add(new Plane4());
aircompany.add(new Plane5());

console.log(aircompany)                          
console.log(`has total Сapacity  ${aircompany.getСapacity()} and has total Loadcapacity ${aircompany.getLoadcapacity()}`)
console.log(`planes in order by distance ${aircompany.getDistance()}`)

let plane1 = new Plane1
let plane2 = new Plane2
let plane3 = new Plane3
let plane4 = new Plane4
let plane5 = new Plane5

function findPlane (capacity, loadCapacity, distance) {        
        if (capacity == plane1.capacity && loadCapacity == plane1.loadCapacity && distance == plane1.distance) {
           console.log('plane1');
        }
        else if (capacity == plane2.capacity && loadCapacity == plane2.loadCapacity && distance == plane2.distance) {
            console.log('plane2') 
        }
        else if (capacity == plane3.capacity && loadCapacity == plane3.loadCapacity && distance == plane3.distance) {
            console.log('plane3')
        }
        else if (capacity == plane4.capacity && loadCapacity == plane4.loadCapacity && distance == plane4.distance) {
            console.log('plane4') 
        }
        else if (capacity == plane5.capacity && loadCapacity == plane5.loadCapacity && distance == plane5.distance) {
            console.log('plane5') 
        }
        else {
            console.log(`We haven't plane like this`)
        }
        return this.plane
    }       

    findPlane(1100, 1100, 6000)


