function largestOfFour(arr) {
    let subA = 0
    let temp = 0
    let arr1 = []

    for (let i = 0; i< arr.length; i++){
        for(let j = 0; j< arr[i].length; j++){
            temp = arr[i][j]
            if(subA==0 || subA < temp){
                subA = temp
            }
        }
        arr1.push(subA)
        subA = 0
    }
    return arr1;
  }
  
  let x = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  console.log(x)