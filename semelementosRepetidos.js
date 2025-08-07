// Cria uma função que recebe um array e retorna um novo array sem elementos repetidos.

function ReceberArray(array){
    let novoArray = []
    for(let i = 0; i < array.length; i++){
        if (array.indexOf(array[i]) === i) {
            novoArray.push(array[i])
        }
    }
    return novoArray
}

let array = [13, 42,13,55,42]

console.log(ReceberArray(array))