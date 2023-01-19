var sortedSquares = function(nums) {
    newArr = []
    nums.forEach((num) => newArr.push(num*num))
    

    return newArr.sort((a,b) => a-b);
    
};