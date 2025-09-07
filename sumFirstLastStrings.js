//PRECISA PEDIR 2 STRINGS E COM ESSAS 2 VAI TIRAR AS 3 PRIMEIRAS CHARACTERES
//E DA SEGUNDA AS ULTIMOS 3 CHARACTERES

const string1 = "flavio"
const string2 = "gomes"
let newString = ""

const result1 = string1.slice(0, 3)
const result2 = string2.slice(-3)
console.log(result2)

newString += result1 + result2

console.log(newString)
