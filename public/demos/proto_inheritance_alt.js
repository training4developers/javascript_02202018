
const protoPerson = {
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
}

const person1 = Object.create(protoPerson);
person1.firstName = 'Sonia';
person1.lastName = 'Sahoo';

const person2 = Object.create(protoPerson);
person2.firstName = 'Nick';
person2.lastName = 'Yang';


console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(protoPerson.getFullName());
console.log(person1.getFullName === person2.getFullName);

