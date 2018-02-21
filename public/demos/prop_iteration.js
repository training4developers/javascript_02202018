
const parent = { 
  legCount: 2,
  armCount: 2,
};

const person = Object.create(parent);
person.firstName = 'Bob';
person.lastName = 'Smith';
person.age = 32;

//console.log(person.firstName);

person.firstName = 'Tim';
person.hairColor = 'brown';
delete person.age;

// in operator uses the prototype chain

// not a good way
// console.log('firstName' in person);

Object.defineProperty(person, 'eyeColor', {
  configurable: true,
  enumerable: false,
  writable: true,
  value: 'brown',
});


// not a good way
for (let propName in person) {
  console.log(propName);
}

console.log(Object.keys(person));

console.log(Object.getOwnPropertyNames(person));