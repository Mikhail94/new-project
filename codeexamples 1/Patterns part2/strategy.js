function basePrice(amount) {                      /// в зависимости от клиента можем делать скидку      
    return amount;
}

function premiumDiscount(amount) {                /// в зависимости от клиента можем делать скидку
    return amount * 0.9;
}

function platinumDiscount(amount) {               /// в зависимости от клиента можем делать скидку
    return amount * 0.8;
}

class Car {                                        /// есть класс машин
    constructor(discount) {
        this.discount = discount;
        this.price = 0;
    }

    checkout() {
        return this.discount(this.price);
    }

    setPrice(price) {                             /// устанавливаем цены на машины
        this.price = price;
    }
}

const customer = new Car(basePrice);                /// получает цену 
const premiumCustomer = new Car(premiumDiscount);   /// получает цену
const platinumCustomer = new Car(platinumDiscount); /// получает цену

customer.setPrice(5000);
console.log(customer.checkout())
premiumCustomer.setPrice(5000);
console.log(premiumCustomer.checkout())
platinumCustomer.setPrice(5000);
console.log(platinumCustomer.checkout())