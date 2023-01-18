//Runtime: 64ms    Beats: 76.82%    Memory: 41.9MB    Beats: 80.70%

const searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};


// Binary Search Version - Optimal solution as it does not search each number.
// Runtime: 62ms    Beats: 84.42%    Memory: 42.3MB    Beats: 30.38%

const searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return left;
};