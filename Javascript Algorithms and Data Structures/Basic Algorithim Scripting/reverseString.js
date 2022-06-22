function reverseString(str){
    str = str.split('')
    let restr = []
    for(let i = str.length; i>=0; i--){
        restr.push(str[i])
    }
    restr = restr.join('')
    return restr
}

reverseString("love")