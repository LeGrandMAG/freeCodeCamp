/*This program compares two arrays and return a new array with any items only found in one of the two given arrays. */

function diffArray(arr1, arr2) {
  const newArr = [];
  arr1.filter( item => arr2.includes(item) === false).map(item => newArr.push(item))
  arr2.filter( item => arr1.includes(item) === false).map(item => newArr.push(item))
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
