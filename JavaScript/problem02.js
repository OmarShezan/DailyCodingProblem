// This problem was asked by Uber.
// Problem:
// Given an array of integers, return a new array such that each element at index i of the new array is the product 
// of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?

const list = [1, 2, 3, 4, 5]
let newList = []
let sum=1
for(let i=0;i<list.length;i++){
    for(let j = 0; j<list.length; j++){
        if(i!=j){
            sum = sum * list[j]
        }
    }
    newList.push(sum)
    sum=1
}
console.log(newList)
