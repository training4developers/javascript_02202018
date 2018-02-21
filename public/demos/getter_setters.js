

const person = { 
  _firstName: 'Bob',
};

Object.defineProperty(person, 'firstName', {
  configurable: true,
  enumerable: true,
  get: function() {
    return this._firstName;
  },
  set: function(value) {
    this._firstName = value;
  }
});

console.log(person.firstName);
