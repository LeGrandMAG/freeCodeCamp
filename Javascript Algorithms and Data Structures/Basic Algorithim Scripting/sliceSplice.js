function frankenSplice(arr1, arr2, n) {
    let g = []
  
    for (let i = 0; i<= arr2.length; i++){
      if(i == n || arr2.length ==0){
        for(let j=0; j<=arr1.length-1; j++){
          g.push(arr1[j])
        }
      }
      if( i <=arr2.length-1 ){

      g.push(arr2[i])
      }
    }
    return g
        }
  
let v = frankenSplice([1, 2, 3, 4], [], 0)

console.log(v)
