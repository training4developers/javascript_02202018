
const youngMan = new Promise(function youngLady(resolve, reject) {

  setTimeout(function() {
    reject('yes, I will marry you because I am madly in love with you...');
  }, 2000);

});

youngMan.then(result => {
  console.log(result);
  console.log('yay! she said yes!');

  console.log('time to look for a place!');
  return new Promise( (resolve) => {
    setTimeout(() => {
      resolve('found a place to get married!');
    }, 2000);
  });

}).then(result => {

  console.log(result);

  console.log('time to find wedding garments!');
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      reject('found wedding garments!');
    }, 2000);
  });
  
}).then(result => {

  console.log(result);

}).catch(result => {
  console.log(result);
  console.log('time to sign up for eHarmony');

});

console.log('young man is waiting...')








