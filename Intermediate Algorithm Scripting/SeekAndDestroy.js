/*This program you will be given an array and some element you have to remove all the elements from the array*/

function destroyer(arr) {

let x = [...arguments]
let y = x.filter(i => x.indexOf(i)>0)


  return arr.filter(item => y.includes(item)==false);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
