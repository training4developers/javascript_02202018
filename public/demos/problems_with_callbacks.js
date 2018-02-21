
// pyramid of doom
// setTimeout(function() {

//         console.log('do this first');

//         setTimeout(function() {

//                 console.log('do this second');

//                 setTimeout(function() {

//                         console.log('do this third');
                
//                 }, 500);    
        
//         }, 1000);

// }, 2000);



// function allDone() {
//   console.log('all done');
// }

// let counter = 0;

// counter++;
// setTimeout(function() {
//   console.log('a');
//   counter--;
//   if (counter === 0) {
//     allDone();
//   }
// }, 2000);

// counter++;
// setTimeout(function() {
//   console.log('b');
//   counter--;
//   if (counter === 0) {
//     allDone();
//   }
// }, 4000);

// counter++;
// setTimeout(function() {
//   console.log('c');
//   counter--;
//   if (counter === 0) {
//     allDone();
//   }
// }, 1000);

// write me some code which will ensure all three set timeouts have completed and then run
// the allDone function

// do not wrap the allDone function in a setTimeout call with something like 5000

// fake Java or fake C#
var con = open('database string');

var rst = con.query('select * from whatever')

console.log(rst);

// JavaScript
open('database string'. con => {

  con.query('select * from whatever'. rst => {

    console.log(rst);

  });

});








