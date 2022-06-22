function confirmEnding(str, target){
    str = str.split('')
    let str2 = target.split('')
    let checkStr = []
    for(let i = str.length-str2.length; i<=str.length; i++){
        checkStr.push(str[i])
    }
    checkStr = checkStr.join('')

    if( checkStr == target){
        return true
    }
    else{
        return false
    }
}

let x = confirmEnding("Bastian", "n");

console.log(x)