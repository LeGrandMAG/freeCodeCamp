function mutation(arr) {
    let x = arr[0].split('')
    let y = arr[1].split('')
    let r = 0
    let g = 0
  
  for(let i=0; i<= y.length-1; i++){
    r = 0
    for(let j = 0; j<=x.length-1; j++){
      if(y[i].toUpperCase() == x[j].toUpperCase()){
        r +=1;
      }
    }
    if(r>0){
      g+=1
    }
  }
  if(g<y.length){
    return false;
  }
  else{
    return true
  }
  }
  let v = mutation(["hello", "hey"])
  console.log(v)