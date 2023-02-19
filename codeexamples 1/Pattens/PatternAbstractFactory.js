////////////// абстрактная фабрика нужна что бы отвязаться от супер класса///////////////
function carProducer(kind) {                /// метод который создаем машину
    if(kind === 'sedan') {                  /// проверяет тип машины 
        return buildSedan;                  /// вызывает соответствующюю функцию
    } 
    if(kind === 'universal') {
        return buildUniversal;
    } 
    if(kind === 'sport') {
        return buildSport;
    }
}

function buildSedan() {                     /// функция создает новую машину 
    return new Sedan();
}

function buildUniversal() {
    return new Universal();
}

function buildSport() {
    return new Sport();
}

class Sedan {                               /// класс автомобиля который будет создаваться 
    getCar() {
        console.log(`This is Sedan`);
    }
}

class Universal {
    getCar() {
        console.log(`This is Universal`);
    }
}

class Sport {
    getCar() {
        console.log(`This is Sport`);
    }
}

let produceSedan = carProducer('sedan');           /// вызываем функцию которая создаст машину 
let sedan = new produceSedan();
let sedan1 = new produceSedan();

let produceUniversal = carProducer('universal');
let universal = new produceUniversal();

let produceSport = carProducer('sport');
let sport = new produceSport();

sedan.getCar();
universal.getCar();
sport.getCar();

sedan1.getCar();