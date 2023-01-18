// Runtime: 76ms    Beats: 57.79%    Memory: 44.7MB    Beats: 77.26%

const search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
    }
    return -1
    
};