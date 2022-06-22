function factorialize(num) {
    let x = 1
    for (let i = 1; i <= num; i++){
        x *=  i
    }
    return x
  }
  
  console.log(factorialize(5))