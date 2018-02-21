
const hare = new Promise( (resolve, reject) => {

  setTimeout(() => {
    resolve('hare');
  }, 4000)

} );

const tortoise = new Promise( (resolve, reject) => {

  setTimeout(() => {
    resolve('tortoise');
  }, 2000)

} );

hare.then(() => console.log('hare is done...'));
tortoise.then(() => console.log('tortoise is done...'));

Promise.race([ hare, tortoise ]).then(result => {
  console.log('and the winner is: ' + result);
});