let example;
class Counter {
    constructor() {
        if(!example) {              /// проверяет существует ли переменная
            example = this;         /// сбрасывает на объект 
        }
        example.count = 0;          /// если не существует возвращает 0 
        return example;             /// возвращает 
    }

    getCounter() {
        return example.count;
    }

    increaseCounter() {
        return example.count++;
    }
}

// let count1 = new Counter();          /// создаем экземпляр класса
// let count2 = new Counter();          /// создаем экземпляр класса
// let count3 = new Counter();          /// создаем экземпляр класса
// //
// count1.increaseCounter();            /// считаем
// count1.increaseCounter();
// count1.increaseCounter();
// count2.increaseCounter();
// count2.increaseCounter();
// count3.increaseCounter();
// //
// console.log(count1.getCounter());        /// выводим
// console.log(count2.getCounter());        /// выводим
// console.log(count3.getCounter());        /// выводим

// count3.increaseCounter();

// console.log(count3.getCounter());

////////////////////////////////////////всегда будем скидывать на один и тот же класс/////////////////////////////////////



class NewCounter {
    constructor() {
        if(typeof NewCounter.instance === 'object') {
            return NewCounter.instance;
        }
        this.count = 0;
        NewCounter.instance = this;
        return this;
    }
    getCounter() {
        return this.count;
    }

    increaseCounter() {
        return this.count++;
    }

    setNew(name, value) {
        return this.name = value;
    }
}

// let newCount1 = new NewCounter();
// let newCount2 = new NewCounter();
// let newCount3 = new NewCounter();
//
// newCount1.increaseCounter();
// newCount1.increaseCounter();
// newCount2.increaseCounter();
// newCount3.increaseCounter();
// newCount3.increaseCounter();
// console.log(newCount1.getCounter());
// console.log(newCount2.getCounter());
// console.log(newCount3.getCounter());
//
// newCount1.setNew('car', 'honda')
// newCount1.setNew('car1', 'toyota')
//
// console.log(newCount1);
// console.log(newCount2);
// console.log(newCount3);