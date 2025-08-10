function SomarElementos(array){
    const result = array.reduce((acumulador, valor)=>{
        return acumulador + valor
    })
    return result
}

const array = [1,2,3,4]

console.log(SomarElementos(array))