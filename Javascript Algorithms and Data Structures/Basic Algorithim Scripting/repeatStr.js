function repeatStringNumTimes(str, num) {
    if (num > 0){
      let x = ''
      for (let i =0; i<=num-1; i++){
        x =x + str
      }
      return x
    }
    else{
      return ''
    }
    }
    
    console.log(repeatStringNumTimes("*", 3))