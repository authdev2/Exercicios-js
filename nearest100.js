function Nearest100(n1,n2){
    const result1 = 100 - n1 
    const result2 = 100 - n2 
    if (result1 < result2){
        return n1
    }else{
        return n2
    }
}
const n1 = 90
const n2 = 89

console.log(Nearest100(n1,n2))