function CheckTimes(string){
    let characterSaved = {}
    for(let i = 0; i<= string.length -1; i++){
        if (!characterSaved[string[i]]){
            characterSaved[string[i]] = 1
        }else{
            characterSaved[string[i]] += 1
        }
    }

    for(saved in characterSaved){
        if (characterSaved[saved] >= 2 && characterSaved[saved] <= 4){
            console.log("A letra " + saved + " tem mais que 2")
        } 
    }
    return characterSaved
}

const string = "banana"
console.log(CheckTimes(string))