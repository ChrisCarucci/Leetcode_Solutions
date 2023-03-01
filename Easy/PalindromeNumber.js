const isPalindrome = function(x) {
    if (x < 0) return false;
    const reverse = `${x}`.split('').reverse().join('');
    return x == reverse;
};