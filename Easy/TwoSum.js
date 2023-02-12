nums = [6, 2, 5, 7, 8, 19, 22];
sum = 9;

const twoSum = (nums, sum) => {

    let hash = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let target = sum - nums[i];
        if (hash.has(target)) {
            return [i, hash.get(target, i)]
        }
        hash.set(nums[i], i)
    }
    return "No match found... :("
}

console.log(twoSum(nums, sum))
