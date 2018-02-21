
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



function allDone() {
  console.log('all done');
}


setTimeout(function() {
  console.log('a');
}, 2000);

setTimeout(function() {
  console.log('b');
}, 4000);

setTimeout(function() {
  console.log('c');
}, 1000);

// write me some code which will ensure all three set timeouts have completed and then run
// the allDone function

// do not wrap the allDone function in a setTimeout call with something like 5000









