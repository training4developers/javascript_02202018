'use strict';

const o = {
  msg: 'Hi!',
};

// Object.preventExtensions(o);
// console.log( Object.isExtensible(o) );

// Object.seal(o);
// console.log( Object.isSealed(o) );

Object.freeze(o);
console.log( Object.isFrozen(o) );


// o.data = 2;

// delete o.msg;

o.msg = 'Bye!';

console.dir(o);
