class Car {                                            /// есть супер класс     
    constructor(model, numberOfDoor, speed) {           /// есть атрибуты 
        this.model = model,
        this.numberOfDoor = numberOfDoor,
        this.speed = speed
    }
} 

class CarFactory {
    createCar(model) {                          /// метод который принимает модель 
        if(model.toLowerCase() === 'bmw') {     /// приводим к одному регистру что бы не зависить от того какие буквы передадим
            return new Car(model, 2, 220)       /// возвращаем модель с параметрами
        } 
        if(model.toLowerCase() === 'toyota') {
            return new Car(model, 4, 190)
        } 
        if(model.toLowerCase() === 'nissan') {
            return new Car(model, 4, 195)
        } 
    }
}

const factory = new CarFactory();              //// создаем экземпляр класса factory

const bmw = factory.createCar('BMW');           /// вызываем Factory  и передаем модель 
const bmw1 = factory.createCar('BMW');          /// вызываем Factory  и передаем модель
const toyota = factory.createCar('Toyota');     /// вызываем Factory  и передаем модель
const nissan = factory.createCar('Nissan');     /// вызываем Factory  и передаем модель

console.log(bmw);
console.log(bmw1);
console.log(toyota);
console.log(nissan);