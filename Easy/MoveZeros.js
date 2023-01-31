// Runtime: 89ms    Beats: 88.88%    Memory: 46.5MB    Beats: 69.89%


var moveZeroes = function (nums) {
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }

  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
  
  return nums;
};