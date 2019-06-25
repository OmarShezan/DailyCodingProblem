// This problem was recently asked by Google
// problem:
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const list = [10, 15, 4, 7, 2, -3]
const k = -1;

function check(){
    for (let i=0; i<list.length; i++){
        let sum = k - list[i];
        if(list.includes(sum))
        {
         console.log("numbers are %s and %s", k,sum)   
         return true
        }
    }
    return false
}

if(!check()){
    console.log("no numbers match")
}


