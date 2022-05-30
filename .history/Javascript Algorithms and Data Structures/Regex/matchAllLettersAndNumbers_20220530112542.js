let longHand = /[A-Za-z0-9_]+/
let shortHand = /\w+/

let poem = "Do you really think that I love you?"


let a = (poem.match(shortHand))
console.log(a)