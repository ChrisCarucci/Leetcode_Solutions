// Runtime: 93ms Beats: 39.11%    Memory Usage: 51.1MB    Beats: 9.31%

const isPalindrome = function(str) {
    let arr = str.split('');
    let result = [];
    let alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'

    for (let i of arr) {
        if (alphabet.includes(i.toLowerCase())) {
            result.push(i.toLowerCase());
        }
    }
    return(result.join('') == result.reverse().join(''))
}


//Runtime: 70ms    Beats: 90.77%    Memory Usage: 44.2MB    Beats: 84.50%

var isPalindrome = function(s) {
    
   
    s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
    s = s.toLowerCase();
    var l = 0, r = s.length - 1;
    console.log(s);

    while(l<r) {
        if(s.charAt(l) != s.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};