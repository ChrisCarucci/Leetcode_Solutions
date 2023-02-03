// Runtime: 74ms    Memory Usage: 47.4MB    Runtime: 78.06%    Memory: 21.71% 


const singleNumber = function(nums) {
    for (const num of nums) {
        ht[num] = ht[num] +1 || 1;
    }

    for (const key in ht) {
        if (ht[key] === 1) {
            return key;
        }
    }
};