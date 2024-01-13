// program to reverse any given string

function reverseString(inputStr) {
   
    if (inputStr.length <= 1) {
      return inputStr;
    }
    return reverseString(inputStr.slice(1)) + inputStr[0];
  }
  
  // Output:
  const inputString = "Hackathon";
  const result = reverseString(inputString);
  console.log("given string:", inputString);
  console.log("reversed string:", result);
  
  