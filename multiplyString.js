let string = 1234

let test = string.toString().split("")
console.log(test)
let result = test.reduce((acc, num)=>{
    return acc * num
})
console.log(result)