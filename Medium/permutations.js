const permute = function(nums) {
    return nums.reduce((result, num) => {
        return result.reduce((permutations, permutation) => {
            permutation.push(num);
            for (let i = permutation.length - 1; i; i--) {
                permutations.push([...permutation])
                permutation[i] = permutation[i - 1];
                permutation[i - 1] = num;
            }
            permutations.push(permutation);
            return permutations;
        }, [])
    }, [[]])
};


const permute = function(nums, arr = [], res = []) {

    if (nums.length === 0) res.push([...arr]);

    for (let i = 0; i < nums.length; i++) {
        let rest = nums.filter((n, index) => index !== i);
        arr.push(nums[i]);
        permute(rest, arr, res);
        arr.pop()
    }
    return res
}