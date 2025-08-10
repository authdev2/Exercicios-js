function AddNew(string){
    if (string.includes("New!")){
        return string
    }else{
        return string + " New!"
    }
}

const string = "Flavio New!"
console.log(AddNew(string))