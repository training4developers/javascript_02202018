
// example code of the XHR
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {

  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }

});

xhr.open('GET', 'http://localhost:3010/cars');
xhr.send();


// code this api call
// 1. create a myFetch function
// 2. accept 1 argument which is the url
// 3. Return a promise that when resolved output
//    the data received from the REST service
myFetch('http://localhost:3010/cars')
  .then(cars => console.log(cars));