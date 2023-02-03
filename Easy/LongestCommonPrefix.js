// Runtime: 72ms    Beats: 62.64%   Memory Usage: 41.8MB    Beats: 92.83%

const longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length-1)
        }
    }
    return prefix;
}