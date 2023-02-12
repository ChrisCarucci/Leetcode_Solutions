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