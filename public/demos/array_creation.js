
// const nums = [ 1,2,3,4,5 ]; 

// console.log(nums instanceof Array);
// console.log(Array.isArray(nums));

function doIt() {

  //console.log(arguments instanceof Array);
  //console.log([]);
  //console.log(arguments);

  const args = Array.from(arguments);

  console.dir(args);

}

doIt(1,2,3,4,5);
