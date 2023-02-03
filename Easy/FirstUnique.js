// Runtime: 105ms    Beats: 81.46%    Memory Usage: 44.8MB    Beats: 78.76%

const firstUniqChar = function(s) {
    let hash = {};

    for (let char of s) {
        hash[char] = hash[char] + 1 || 1;
    }

    for (let key in hash) {
        if (hash[key] === 1) {
            return s.indexOf(key)
        }
    }
    return -1;
}