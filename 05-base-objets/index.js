// const person1 = {
//     firstname: "string",
//     lastname: "string"
// };
//
// const person2 = {
//     firstname: "string",
//     lastname: "string"
// };
//
// // const obj = {
// //     person1: person1,
// //     person2: person2
// // };
//
// const obj = {
//     person1,
//     person2
// };
//
// console.log(obj);

// const MyObject = () => { };
//
// MyObject.prototype.methodName = () => { };

class Person {
    constructor(name) {
        this._firstname = name;
    }

    getName() {
        return this._firstname;
    }
}

class Bibi extends Person {
    constructor() {
        super("Bibi");
    }
}

const bibi = new Bibi();

console.log(bibi.getName());