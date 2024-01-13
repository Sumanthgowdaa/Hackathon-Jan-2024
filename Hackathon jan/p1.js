function segregateZerosAndOnes(arr) {
    let zeros = [];
    let ones = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeros.push(0);
      } else if (arr[i] === 1) {
        ones.push(1);
      }
    }
  
    return zeros.concat(ones);
  }
  
  const inputArray = [0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1];
  const segregatedArray = segregateZerosAndOnes(inputArray);
  
  console.log(segregatedArray);
  