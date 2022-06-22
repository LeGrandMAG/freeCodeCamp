function truncateString(str, num) {
    str = str.split('')
    let x = []
    for (let i = 0; i <= num-1; i++){
      x.push(str[i])
    }
    if(str.length > num){
  
    return x.join('')+"..."
    }
    else{
  
    return x.join('');
    }
  }
  
  let v = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
  
  console.log(v)