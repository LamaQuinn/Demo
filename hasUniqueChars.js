// Write your code below
//A set is unordered and each element can only appear once in a set.
let hasUniqueChar=(word)=>{
    const unique = new Set()//create an empty Set
    for(let char of word){//each character in word
        // The has() method returns a boolean indicating whether an element with the specified key exists or not.
        if(unique.has(char)){ //check if it contains the same character
            return false
        }
        unique.add(char)//if dont add checked characters it will show wrong answer
    }
    return true
}

let answer=hasUniqueChar("Laman")
console.log(answer)