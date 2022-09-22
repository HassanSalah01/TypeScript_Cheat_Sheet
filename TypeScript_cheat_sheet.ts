// variable declaration

let name1: string = "hello";
let num: number = 5;
let isTrue: boolean = true;
let isNull: null = null;
let isUndefined: undefined;
let isObject: object = {
    name: "marco",
    age: 45,
};
console.log(name1);
console.log(num);
console.log(isTrue);
console.log(isNull);
console.log(isUndefined);
console.log(isObject);

//Functions VOID
const printName = (x: string): void => {
    console.log(x);
};
printName("Mark");

// Function Return

const printName2 = (x: string): string => {
    return x;
};
console.log(printName2("Sara"));

// Function default parameters

const printName3 = (
    name: string,
    age: number,
    phoneNumber?: number
): string => {
    return `${name} ${age}${phoneNumber}`;
};

const printName4 = (...num: number[]): number => {
    let x = 0;
    for (let i = 0; i < num.length; i++) {
        x += num[i];
    }
    return x;
};

//object

const user: { name: string; age: number } = {
    name: "Mark",
    age: 20,
};
console.log(user);

//interfaces

interface User {
    name: string;
    age: number;
}

const user2: User = {
    name: "mark",
    age: 30,
};
const user3: User = {
    name: "sara",
    age: 50,
};

console.log(user2);
console.log(user3);

// interfaces 2

interface Users {
    name: string;
    age?: number; // here age is not mandatory
}
// add another prop to the interface
interface Users {
    address?: string;
}
// extend interface
interface Users2 extends Users {
    grades: number; //User2 got {name , age ,grade}
}

// interface can extend multiple interfaces
interface Users3 extends Users, Users2 {
    phoneNumber: number | string;
}

const user4: Users = {
    name: "john",
    age: 50,
};

const user5: Users = {
    name: "sara",
    //age can be number or undifiened
};

// function inside interface
interface users {
    name: string;
    age: number;
    getName(): string;
    getage(): void;
}
const user6: users = {
    name: "sara",
    age: 30,
    getName() {
        return this.name;
    },
    getage() {
        console.log("welcome");
    },
};
console.log(user6.getName() + " inside The function");
// it is better to name your interfaces as
// A) IUser
// B) UserInterface
// we do this to not mistaken them with classes name

// union Types

let pageNumber: string | number;
pageNumber = 5;
pageNumber = "10";

// type Allias

type str = string;
let naming: str = "Marty";
//here string and str are the same
//we can also Do let naming :string = "Marty"

// here we are combining Both Allies and types
type id = string | number;
let userId: id = "5";
userId = 10;

type user = {
    name: string;
    age: number;
};
// Extend Type user to add new properties

type userss = user & {
    address: string; // all the user prop +=adress
};

// Arrays

const arr: number[] = [1, 2, 3, 4, 5];
const arr1: Array<string> = ["a", "b", "c"];

// different type Array

const arr2: (number | string)[] = [1, 2, 3, "sara"];

// multy dimenssion array

const arr3: (number | string | string[])[] = [1, 2, 3, "sara", ["mark", "poe"]];

//tuple

const tup: [number, string] = [10, "mark"];
tup.push(5); // here will push 5 even if i didnt spe the type
// output = > [10,"mark",5]
// to avoid adding on the tuples add ( readOnly)

const tup2: readonly [number, string] = [10, "mark"];
// typ2.push(5) --> this will land an error , cant push with readonly prop

//never vs void keyword :

const nev = (): void => {
    console.log("welcome"); // will return undefined js-fun
    return; // still valid , return undef and its void
};
const AlwaysLogs = (x: number) => {
    while (true) {
        console.log("welcome");
    }
    // return ; this is unreachble code Cause of the infinite look , We use Never
};

const ErrorHand = (msg: string): never => {
    throw Error(msg); //never cant have a reachble End point
};

// enurm

// it always start with 0 if You didnt intialise if a = 10, b = 11 ....
enum intia {
    a, // = 0
    b, // = 1
    c, // = 2
    d, //=3
}
enum time {
    one = 10,
    two = intia.b,
    three, // can be a funtion three = foo()
    four,
}
// enums can refer to another enum
console.log(time.two);
console.log(`${time.three} ----------------`);

//type assertion

// this will work fine cause u init as a string and repeat is a string funciton
let data: any = "hello";
console.log((data as string).repeat(2));

// this will not work cause u init data2 as string and it is a numb  and repeat is a not int funciton
// let data2: any = 10;
// console.log((data2 as string).repeat(2));

//union type
type aa = {
    one: number;
    two: string;
    three: boolean;
};
type bb = {
    four: string;
};

type cc = {
    five: number;
};
// for aa and cc only

type mixing = aa & cc; // one , two , three , five ;

// classes In typeScript

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
// you can use variable Type As Normal OOP (private , protected , public by default)
class Person2 {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    //setter and getter ==>
    set names(x: string) {
        this.name = x;
    }
    get names2(): string {
        return this.name;
    }
}
// Remmber ==> Without ()
const p = new Person2("kik", 5);
console.log(p.names2);
p.names = "rooror";
console.log(p.names2);

// static Fields
class Person1 {
    static cout: number;
    constructor() {
        Person1.cout++;
    }
}

// Classes implement Interface
interface data {
    name: string;
    age?: number;
}

class Peron3 implements data {
    // name :string;
    // age:number;
    constructor(public name: string) {}
}
