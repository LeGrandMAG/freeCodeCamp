/*Looks through an array of objects and return an array of all objects that have matching name */

function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
 let kk = Object.keys(source)

 let v = collection
 .filter( item => kk
 .every( a => item.hasOwnProperty(a) && item[a]==source[a]))
console.log(v)
  // Only change code above this line
  return v;
}
