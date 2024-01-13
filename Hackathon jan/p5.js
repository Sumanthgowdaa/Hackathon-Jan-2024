function hasRepeatedCharacters(str) {
    
    let charMap = {};
    for (let char of str) {
     
      if (charMap[char]) {
        return true;
      } else {
         
        charMap[char] = true;
      }
    }  
    return false;
  }
  
  // Output
  let inputString = "aeiou";
//   let inputString = "namaskara";
  let result = hasRepeatedCharacters(inputString);
  
  if (result) {
    console.log("string has repeated characters");
  } else {
    console.log("string does not have repeated characters");
  }
  