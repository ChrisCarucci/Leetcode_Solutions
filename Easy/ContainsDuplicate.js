// Brute Force

const containsDuplicate = function(nums) {
    for (let i = 0; i <= nums.length; i++) {
        let curr = nums[i]

        for (let j = i+1; j <= nums.length; j++) {
            if (nums[j] === curr) {
                return true;
            }
        }
    }
    return false;
};


// Hash Table

const containsDuplicate = function(nums) {
    let hTable = {};
    for (let i = 0; i < nums.length; i++) {
	    if (nums[i] in hTable) {
		    return true;
	    } else {
	        hTable[nums[i]] = 1;
	    }
    }
    return false;
};