//THIS PROGRAM TRANSFORM ALL THE FIRST LETTER OF WORDS IN CAPITAL LETTER
function titleCase(str) {
    str = str.split('')
    let t = 0
    let x = []
    for (let i = 0; i <= str.length-1; i++){
      if(str[i] != ' '){
        if(t == 0){
          str[i] = str[i].toUpperCase()
        }
        else{
          str[i] = str[i].toLowerCase()
  
        }
        t++
      }
      else{
        t = 0
      }
        x.push(str[i])
    }
    x = x.join('')
    return x
  }
  
  let y = titleCase("I'm a little tea pot");
  
  console.log(y)