function findLongestWordLength(str) {
    str =str.split('')
    let t = 0
    let k = 0
    for(let i = 0; i<= str.length-1; i++){
        if(str[i] != ' '){
            t +=1
            if(k<t || k == 0){
                k =t
            }
        }
        else{
            t=0
        }
    }
    return k
  }
  
  let x = findLongestWordLength("The quick brown fox jumped over the lazy dog");

  console.log(x)