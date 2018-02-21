
const p1 = new Promise(resolve => setTimeout(() => resolve('a'), 2000));
const p2 = new Promise(resolve => setTimeout(() => resolve('b'), 4000));
const p3 = new Promise( (resolve, reject) => setTimeout(() => reject('c'), 6000));
const p4 = new Promise(resolve => setTimeout(() => resolve('d'), 8000));

p1.then(results => console.log(results));
p2.then(results => console.log(results));
p3.then(results => console.log(results)).catch(results => console.log('error: ' + results));
p4.then(results => console.log(results));

Promise.all([p1,p2,p3,p4]).then(results => {
  console.log(results);
  console.log('all done');
}).catch(results => {
  console.log(results);
  console.log('at least one failed');
});





// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.getFullName = () => {
//       console.log(this.firstName + ' ' + this.lastName);
//     }
  
//   }

// }

// const p = new Person('Bob', 'Smith');

// p.getFullName();

// // setTimeout(p.getFullName(), 2000);

// // const myBind = (fn, context) => {

// //   return () => {
// //     fn.call(context);
// //   };

// // };


// // setTimeout(myBind(p.getFullName, p), 2000);

// // setTimeout(function() {
// //   p.getFullName();
// // }, 2000);