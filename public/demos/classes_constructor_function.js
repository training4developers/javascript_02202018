
class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const person1 = new Person('Bob', 'Smith');

Person.prototype.getFullName = function() {
  console.log('you have been hacked...');
};

console.log(person1.getFullName());

console.dir(person1);

// function Person2(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person2.prototype.getFullName = function() {
//   return this.firstName + ' ' + this.lastName;
// };

// const person2 = new Person2('Bob', 'Smith');
// console.log(person2.getFullName());

// console.dir(person2);
