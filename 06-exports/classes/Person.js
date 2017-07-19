class Person {
    constructor(name) {
        this._firstname = name;
    }

    getName() {
        return this._firstname;
    }
}

module.exports = Person;