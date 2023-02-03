// Runtime: 78 ms    Beats: 99.08%    Memory Usage: 49.4MB    Beats: 28.16%


var reverseString = function(s) {
    
    let left = 0;
    let right = s.length-1;
    
    while (left < right) {
        let hold = s[left];
        s[left] = s[right];
        s[right] = hold;
        left++;
        right--;
    }
    
};



