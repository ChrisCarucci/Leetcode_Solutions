const reverseWords = function(s) {
    let res = '';
    let word = '';
    for (let c of s) {
        if (c === ' ') {
            res += word + c;
            word = '';
        } else {
            word = c + word;
        }
    }
    return res + word;
};






const reverseWords = function(s) {
    return s.split(' ').map(w => w.split('').reverse().join('')).join(' ');
};