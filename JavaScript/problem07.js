// This problem was asked by __Facebook__.
// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
// You can assume that the messages are decodable. For example, '001' is not allowed.


// map all alphabet into array
const alphabet = (" abcdefghijklmnopqrstuvwxyz").split("");
const input = 111;
// Less optimized, clearer version
function decode(codes){
    codes = codes.toString();
    
    const split1 = [];
    const split2 = [];
    //Split1, start at index 0
    for (var i = 0; i < codes.length; i+=2) {
      // If we have enough letters left to make a par
      if(codes.charAt(i+1)){
        split1.push(codes.charAt(i) + codes.charAt(i+1));
      } else {
        split1.push(codes.charAt(i));
      }
    }
  
      //Split1, start at index 1
      split2.push(codes.charAt(0));
      for (var i = 1; i < codes.length; i+=2) {
        // If we have enough letters left to make a par
        if(codes.charAt(i+1)){
          split2.push(codes.charAt(i) + codes.charAt(i+1))
        } else {
          split2.push(codes.charAt(i))
        }
        
      }
      
      console.log(split1, split2)
      console.log("split1");
      console.log(display(split1))
      console.log("split2");
      console.log(display(split2))
      console.log("all");
      console.log(display(codes))
      
  }

  function display(list){
    let temp ="";
    for(let i=0; i<list.length;i++){
        if(list[i]< 27)
            temp = temp + alphabet[list[i]]
    }
    return temp;
  }

  decode(input);