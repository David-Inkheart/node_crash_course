//Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {
//     // Module code actually lives in here
// });

console.log (__dirname, __filename);

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    greeting() {
        console.log(`My name is ${this._name} and I am ${this._age}years old.`);
    }
}

module.exports = Person;