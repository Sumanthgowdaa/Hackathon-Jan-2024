// to get the maximum count of consecutive 1s in a given array

function getMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currentCount = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {     
        currentCount++;       
        maxCount = Math.max(maxCount, currentCount);
      } else {
        currentCount = 0;
      }
    }
  
    return maxCount;
  }
  
  // output
  const inputArray = [0,1,1,0,0,1,1,1,1,0,1,0,1];
  const result = getMaxConsecutiveOnes(inputArray);
  console.log("Maximum count of 1s are:", result);
  