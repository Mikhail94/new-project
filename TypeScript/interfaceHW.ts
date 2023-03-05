/////////////////////УСЛОВИЕ ЗАДАЧ ДЛЯ TYPE SCRIPT///////////////////////////////


// // 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.

// const users = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep',
// car: 'VW'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut',
// children: 2
//     }
// ];

// // 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфейc Person, который будет соответствовать массиву

// type Person = unknown;

// const persons = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];


// // 3. Напишите анотации типов к этому классу.
// export class ObjectManipulator {

//     constructor(protected obj) {}

//     public set(key, value) {
//         return new ObjectManipulator({...this.obj, [key]: value});
//     }

//     public get(key) {
//         return this.obj[key];
//     }

//     public delete(key) {
//         const newObj = {...this.obj};
//         delete newObj[key];
//         return new ObjectManipulator(newObj);
//     }

//     public getObject() {
//         return this.obj;
//     }
// }

// // 4. Обеспечьте правильную типизацию для указанных функций.

// /**
//  * 2 arguments passed: returns a new array
//  * which is a result of input being mapped using
//  * the specified mapper.
//  *
//  * 1 argument passed: returns a function which accepts
//  * an input and returns a new array which is a result
//  * of input being mapped using original mapper.
//  *
//  * 0 arguments passed: returns itself.
//  *
//  * @param {Function} mapper
//  * @param {Array} input
//  * @return {Array | Function}
//  */
// export function map(mapper, input) {
//     if (arguments.length === 0) {
//         return map;
//     }
//     if (arguments.length === 1) {
//         return function subFunction(subInput) {
//             if (arguments.length === 0) {
//                 return subFunction;
//             }
//             return subInput.map(mapper);
//         };
//     }
//     return input.map(mapper);
// }


// /**
//  * 2 arguments passed: returns a new array
//  * which is a result of input being filtered using
//  * the specified filter function.
//  *
//  * 1 argument passed: returns a function which accepts
//  * an input and returns a new array which is a result
//  * of input being filtered using original filter
//  * function.
//  *
//  * 0 arguments passed: returns itself.
//  *
//  * @param {Function} filterer
//  * @param {Array} input
//  * @return {Array | Function}
//  */
// export function filter(filterer, input) {
//     if (arguments.length === 0) {
//         return filter;
//     }
//     if (arguments.length === 1) {
//         return function subFunction(subInput) {
//             if (arguments.length === 0) {
//                 return subFunction;
//             }
//             return subInput.filter(filterer);
//         };
//     }
//     return input.filter(filterer);
// }


// /**
//  * 2 arguments passed: returns sum of a and b.
//  *
//  * 1 argument passed: returns a function which expects
//  * b and returns sum of a and b.
//  *
//  * 0 arguments passed: returns itself.
//  *
//  * @param {Number} a
//  * @param {Number} b
//  * @return {Number | Function}
//  */
// export function add(a, b) {
//     if (arguments.length === 0) {
//         return add;
//     }
//     if (arguments.length === 1) {
//         return function subFunction(subB) {
//             if (arguments.length === 0) {
//                 return subFunction;
//             }
//             return a + subB;
//         };
//     }
//     return a + b;
// }
/////////////////////РЕШЕНИЕ///////////////////////////////

interface ObjectManipulatorInterface {
    set(key: any, value: string): object,
    get(key: any): string | number | boolean | undefined | null | symbol | object,
    delete(key: string): object,
    getObject(): object
}

export class ObjectManipulator implements ObjectManipulatorInterface{

    constructor(protected obj: object) {}

    public set(key: string, value: string): object {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string): string | number | boolean | undefined | null | symbol | object | any {
        return this.obj[key];
    }

    public delete(key: string): object {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): object {
        return this.obj;
    }
}

interface User {
    [key: string]: number | string | boolean,
}
export class ObjectManipulator1 {

    constructor(protected obj: User) {}

    public set(key: string, value: number | string | boolean | null): object {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string): string | boolean | number | null {
        return this.obj[key];
    }

    public delete(key: string): object {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): object {
        return this.obj;
    }
}


/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */


export function map(mapper: (value: number, index: number, array: number[]) => number, input: number[]): number[] | Function {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: number[]): number[] | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}