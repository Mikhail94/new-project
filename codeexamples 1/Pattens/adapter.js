class SimpleEngine {                            /// вид двигателя
    simpleEngineInterface() {                   /// метод запуска двигателя
        console.log(`Simple Engine`)
    }
}

class TurboEngine {                             /// вид двигателя
    turboEngineInterface() {                    /// метод запуска двигателя
        console.log(`Turbo Engine`)
    }
}

class TurboEngineAdapter {                      /// говорит о том что если мы вызываем один класс, то ссылайся на другой
    constructor(engine) {
        this.engine = engine;
    }

    simpleEngineInterface() {
        this.engine.turboEngineInterface();
    }
}

class Car {
    startEngine(engine) {
        engine.simpleEngineInterface();
    }
}

let car = new Car();
let simpleEngine = new SimpleEngine();
car.startEngine(simpleEngine);

// let turbo = new TurboEngine();
// car.startEngine(turbo);

let turboEngine = new TurboEngineAdapter(new TurboEngine());
car.startEngine(turboEngine);