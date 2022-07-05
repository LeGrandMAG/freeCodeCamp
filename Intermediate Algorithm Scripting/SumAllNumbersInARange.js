/*This function return the sum of two numbers plus the sum of all the numbers between them.*/

function sumAll(arr) {
  arr = arr.slice().sort((a,b) => a-b);
  let sum1 = (arr[0] + arr[1])
  let sum2 = 0
  for (let i = arr[0]+1; i <= arr[1]-1; i++){
    sum2 = sum2 + i
    console.log(i)
  }
  return sum2 + sum1
}
console.log(sumAll([1, 4]))
