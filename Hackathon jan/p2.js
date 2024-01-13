// to check whether the string is palindrome or not

function isPalindrome(str) {
    //  converting string to lowercase or upper case 
    const Str = str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  
    
    for (let i = 0; i < Str.length / 2; i++) {
      if (Str[i] !== Str[Str.length - 1 - i]) {
        return false;
      }
    }
    
    return true;
  }
  
  // Output
 const output = "MalaYalam";    
//   const output = "english";     //false
  console.log(isPalindrome(output));
  