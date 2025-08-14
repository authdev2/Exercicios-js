function ChecAscending(array){
    for(let i = 0; i<array.length; i++){
        if (array[i +1] < array[i]){
            return false
        }
    }
}


console.log(ChecAscending([1,2,3,4,5]))
console.log(ChecAscending([1,3,3,4,5]))