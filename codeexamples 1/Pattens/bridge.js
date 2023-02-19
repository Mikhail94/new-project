class Model {                           //// модель. абстракция
    constructor(color) {
        this.color = color;
    }
}

class Color {                               /// реализация
    constructor(value) {
        this.model = value;
    }

    getColor() {                            /// реализация
        return this.model;
    }
}

class WhiteColor extends Color {
    constructor() {
        super('White');
    }
}

class BlueColor extends Color {
    constructor() {
        super('Blue');
    }
}

class WV extends Model {                                    /// есть модель авто
    constructor(color) {
        super(color);
    }

    paintCar() {                                            /// авто красится
        return `WV with color ${this.color.getColor()}`
    }
}

class Toyota extends Model {
    constructor(color) {
        super(color);
    }

    paintCar() {
        return `Toyota with color ${this.color.getColor()}`
    }
}

const blueWV = new WV(new BlueColor());        /// создаем новый авто и красим 
const whiteWV = new WV(new WhiteColor());
const blueToyota = new Toyota(new BlueColor());
const whiteToyota = new Toyota(new WhiteColor());

console.log(blueWV.paintCar())                 /// создаем объекты разных машин и разных цветов
console.log(whiteWV.paintCar())
console.log(blueToyota.paintCar())
console.log(whiteToyota.paintCar())