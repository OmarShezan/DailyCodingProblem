// ### Question #233
// This problem was asked by __Apple__.

// Implement the function fib(n), which returns the nth number in the Fibonacci sequence, using only O(1) space.
// 0 1 2 3 4 5 6 7  8  9
// 0 1 1 2 3 5 8 13 21 34

console.log(fib(3))

function fib(n){
  if(n <= 1){
    return n
  }
  prev = 0
  curr = 1
  for(i = 1; i < n; i++){
    temp = prev + curr
    prev = curr
    curr = temp
  }
  return curr
}