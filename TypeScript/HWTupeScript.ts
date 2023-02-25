
interface users {
    name: string,
    age: number, 
    occupation: string,
    car?: string,
    children?: number,
}
const user1: users = {
    name: 'Max Mustermann',
    age: 25, 
    occupation: 'Chimney sweep',
    car: 'VW',
}
const user2: users = {
    name: 'Kate Müller',
    age: 23, 
    occupation: 'Astronaut',
    children: 2,
}

console.log(user1);
console.log(user2);



interface userRole {
    name: string,
    age: number, 
    occupation?: string,
    role?: string,
    }
interface adminRole {
    name: string,
    age: number, 
    occupation?: string,
     role?: string,
    }
    
    type Person = userRole | adminRole
    
    let Persons : Person [] =[
            {
                name: 'Max Mustermann',
                age: 25,
                occupation: 'Chimney sweep'
            },
            {
                name: 'Jane Doe',
                age: 32,
                role: 'Administrator'
            },
            {
                name: 'Kate Müller',
                age: 23,
                occupation: 'Astronaut'
            },
            {
                name: 'Bruce Willis',
                age: 64,
                role: 'World saver'
            }
        ];

interface IObjectManipulator<T> {
    new (obj: T): IObjectManipulator<T>;
    set(key: string, value: any): IObjectManipulator<T>;
    get(key: string): any;
    delete(key: string): IObjectManipulator<T>;
    getObject(): T;  }


export class ObjectManipulator {

    constructor(protected obj) {}

    public set(key, value) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key) {
        return this.obj[key];
    }

    public delete(key) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}


interface filterFunction {
    <T, U>(filterer: (value: T, index: number, array: T[]) => U, input: T[]): U[];
    <T, U>(filterer: (value: T, index: number, array: T[]) => U): (input: T[]) => U[];
    (): filterFunction;
  }

interface sumNumbers {
add(a: number, b: number): number;
add(a:number), (b:number): number; 
(): sumNumbers;
  }
