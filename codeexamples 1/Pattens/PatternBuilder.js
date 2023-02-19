class VW {                              /// есть реализация машины
    constructor() {
        this.parktronic = false;
        this.signal = false;
        this.model = 'Polo';
        this.color = 'white';
    }
} 

class CarBuilder {                              /// создается новый класс строитель
    constructor() {
        this.car = new VW();                    /// принимает машину 
    }

    addParktronic(parktronic) {                 /// метод
        this.car.parktronic = parktronic;       /// присваивает машине парктроник 
        return this;                            /// объект возвращает сам себя
    }

    addSignal(signal) {                        /// метод  
        this.car.signal = signal;              /// добавляем сигнал
        return this;                            /// объект возвращает сам себя
    }

    changeModel(model) {                        /// метод
        this.car.model = model;                 /// меняем модель авто
        return this;                            /// объект возвращает сам себя
    }

    changeColor(color) {                        /// метод
        this.car.color = color;                 /// меняем цвет авто
        return this;                            /// объект возвращает сам себя
    }

    addAutopilot(autopilot) {                  /// метод
        this.car.autipilot = autopilot;        /// добавли автопилот
        return this;                           /// объект возвращает сам себя
    }

    build() {                                  /// метод который собирает машину
        return this.car;
    }
}

let car = new CarBuilder().addParktronic(true).changeColor('black').addAutopilot('newAutopilot').build();           /// создаем машину

console.log(car);

let car1 = new CarBuilder().changeModel('Passat').addSignal(true).changeColor('pink').addAutopilot('Super new').build();

console.log(car1);

let car2 = new CarBuilder().changeModel('Jetta').changeColor('silver').build();
console.log(car2);

///////////// так создаются машины с реализацией////////////