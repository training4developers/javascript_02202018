'use strict';

const firstName = 'Bob';

const propName = '_lastName';

const person = { 
  firstName,
  [ propName ]: 'Smith',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  get lastName() {
    return this._lastName;
  },
  set lastName(value) {
    this._lastName = value;
  },
  age: undefined,
};

// console.log(person.age);

console.log(JSON.stringify(person))

console.log(Object.getOwnPropertyNames(person));
