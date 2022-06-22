function bouncer(arr) {
    let g = []
    for (let i =0; i<= arr.length-1; i++){
      if (Boolean(arr[i]) == true){
        g.push(arr[i])
      }
    }return g
  }
  
  bouncer([7, "ate", "", false, 9]);