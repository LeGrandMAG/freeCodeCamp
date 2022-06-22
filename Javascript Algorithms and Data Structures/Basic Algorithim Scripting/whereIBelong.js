function getIndexToIns(arr, num) {
    let n=0
    let  temp = 0
    arr.sort((a,b)=>a-b)
  
    for (let i = 0 ; i<=arr.length-1; i++){
      if(arr[i]<num){
        temp = i+1
      }
      else if(arr[i] == num){
        temp = i
      }
    }return temp
  }
  
  let v = getIndexToIns([10, 20, 30, 40, 50], 30)
  console.log(v)