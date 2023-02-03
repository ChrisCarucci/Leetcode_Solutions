// Runtime: 84ms    Beats:79.60%    Memory Usage: 44MB    Beats: 61.03%

const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sLetters = {};

    for (let char of s) {
        if (!sLetters[char]) {
            sLetters[char] = 1
        } else {
            sLetters[char]++
        }
    }
    for ( let char of t) {
        if (!sLetters[char]) {
            return false;
        }
        if (sLetters[char]) {
            sLetters[char]--;
        }
        if (sLetters[char] === 0) {
            delete sLetters[char];
        }
    }
    return Object.keys(sLetters).length === 0;
};