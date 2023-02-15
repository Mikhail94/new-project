class Person {                                                      /// создаем класс
    constructor(eyesColor, skinColor) {                             /// создаем конструктор
        this.numberOfLegs = 2;
        this.eyesColor = eyesColor;
        this.skinColor = skinColor
    }
}

class Girl extends Person {                                         /// создаем ребенка из Person
    constructor(eyesColor, skinColor) {                             /// создаем конструктор
        super(eyesColor, skinColor);                                /// наследуем 
        this.sex = 'female';

    }
}

class Baby extends Girl {
    constructor(eyesColor, skinColor, numberOfMonth) {
        super(eyesColor, skinColor);
        this.numberOfMonth = numberOfMonth;
    }

    async move() {                                               /// создаем метод
        console.log('Moving')
    }

    static async cry() {                                        /// статический метод. с помощью него мы можем обращаться именно к самому классу
        console.log('Crying')
    }
 }

const girl = new Girl('green', 'white')
console.log(girl);
const baby = new Baby('blue', 'red', 6)
console.log(baby);

baby.move()
Baby.cry();