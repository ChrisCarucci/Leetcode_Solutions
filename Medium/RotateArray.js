// Runtime: 92ms    Beats: 92.96%     Memory: 50.8MB     Beats: 93.52%

nums = [1,2,3,4,5,6,7], k = 3


const rotate = function (nums, k) {
    const len = nums.length
    k = (k % len) 
    
    let end = nums.splice(-k, k)
    console.log("End:". end)
    console.log("Nums: ", nums)

    nums.splice(0,0,...end)
};

rotate(nums, k)