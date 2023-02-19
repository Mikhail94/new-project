class WV {
    constructor(model, numberOfDoor, speed, color) {
        this.model = model,
        this.numberOfDoor = numberOfDoor,
        this.speed = speed;
        this.color = color;
    }

    produceCar() {                                                                  
        return new WV(this.model, this.numberOfDoor, this.speed, this.color);
    }
} 

let carPrototype = new WV('polo', 4, 220, 'Green');         /// создали первый прототип

let car1 = carPrototype.produceCar();           /// создали машину
let car2 = carPrototype.produceCar();           /// создали машину
let car3 = carPrototype.produceCar();           /// создали машину

console.log(car1);
console.log(car2);
console.log(car3);
car2.color = 'white';
console.log(car2);
console.log(car1);

let passatPrototype = new WV('passat', 5, 250, 'black');        /// создали второй прототип


let passat = passatPrototype.produceCar();

console.log(passat);

passat.speed = 330;
console.log(passat);