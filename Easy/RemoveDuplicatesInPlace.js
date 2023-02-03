// Runtime: 69ms :)   Memory Usage: 43.7MB    Run Time Beats: 93.49%      Memory Beats: 99.83%

nums = [1,1,2]

const removeDuplicates = function(nums) {
    let seen = {};
    let k = 0;

  for (var i = 0; i < nums.length; i++) {
    if (!seen[nums[i]] ) {
      nums[k++] = nums[i];
      seen[nums[i]] = 'seen';
    }
  }
  nums.length = k;
  return nums;
};

removeDuplicates(nums)

