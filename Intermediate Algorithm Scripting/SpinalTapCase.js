/*This function takes a string and convert it to spinal case. All lowercase-words join by dashes*/

function spinalCase(str) {
  let x = /\s+|\_+/g
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2")
  return str
  .split(x)
  .join('-').toLowerCase()
  ;
}
