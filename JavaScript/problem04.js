// This problem was asked by Stripe.
// Given an array of integers, find the first missing positive integer in linear time and constant space. 
// In other words, find the lowest positive integer that does not exist in the array. 
// The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.


const list = [3, 4, -1, 1]

const sortedList = list.sort()
for(let i=0;i<list.length;i++){
    let smallest = list[i]+1
    if(!list.includes(smallest) && smallest>0){
        console.log(smallest)
        return;
    }
}
