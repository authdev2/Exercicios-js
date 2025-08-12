//Remova valores duplicados de um array
const valores = [1,2,1,3,4,1,2]
let newArray = []

for(let i =0; i<= valores.length-1; i++){
    if (valores.indexOf(valores[i]) == i){
        newArray.push(valores[i])
    }
}

console.log(newArray)