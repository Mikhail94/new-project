// Chain of Responsibility 
class Profile {                                                     /// есть профиль на веб сайте
    pay(orderSum) {                                                 /// метод для того что бы оплатить за что-то
        if(this.canPay(orderSum)) {                                 /// цепочка зависимости
            console.log(`Paid ${orderSum} using ${this.name}`)
        } else if(this.incomer) {
            console.log(`Connot pay with ${this.name}`);
            this.incomer.pay(orderSum);
        } else {
            console.log(`Not enough money on ${this.name}`)
        }
    }

    canPay(sum) {                                           /// метод который проверяет могу ли я оплатить
        return this.balance >= sum;
    }

    setNext(profile) {                                     /// если не хватает суммы,то передает дальше 
        this.incomer = profile;
    }

    show() {                                            /// показывает что происходит
        console.log(this)
    }
}

class Visa extends Profile {                           /// метод оплаты
    constructor(balance) {
        super();
        this.name = 'Visa';
        this.balance = balance;
    }
}

class YandexMoney extends Profile {                   /// метод оплаты
    constructor(balance) {
        super();
        this.name = 'Yandex Money';
        this.balance = balance;
    }
}

class Maestro extends Profile {                      /// метод оплаты
    constructor(balance) {
        super();
        this.name = 'Maestro';
        this.balance = balance;
    }
}

const visa = new Visa(5000);                        /// создаем объект с количеством денег
const maestro = new Maestro(6500);
const yandexMoney = new YandexMoney(7000);

visa.setNext(maestro);
maestro.setNext(yandexMoney);

visa.pay(7100);

visa.show();