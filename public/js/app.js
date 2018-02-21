
console.log(Promise.resolve('some data'));
// console.log(Promise.reject('some data'));


// function getCarData() {

//   return new Promise(resolve => {

//     setTimeout(function() {
//       resolve([{ make:'Audi' }]);
//     }, 2000);

//   });

// }

function getMockCarData() {
  return Promise.resolve([{ make:'Tesla' }]);
}

getMockCarData().then(cars => console.log(cars));




const hare = new Promise( (resolve, reject) => {

  setTimeout(() => {
    resolve('hare');
  }, 4000)

} );
