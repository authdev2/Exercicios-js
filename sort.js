const users = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 20 },
  { nome: "Maria", idade: 30 }
]

let result = users.sort((n1,n2)=>{
    console.log(n1, n2)
    if (n1.idade > n2.idade){
        return -1
    }else if(n1.idade < n2.idade){
       return 1
    }else{
        return 0
    }
})

console.log(result)