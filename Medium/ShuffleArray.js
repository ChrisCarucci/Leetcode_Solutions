const Solution = function(nums) {
    this.nums = nums;
};

Solution.prototype.reset = function() {
    return [...this.nums];
};

Solution.prototype.shuffle = function() {
   let ans = [...this.nums];
    for(let i = ans.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [ans[i], ans[j]] = [ans[j], ans[i]];
    }
    return ans;    
};