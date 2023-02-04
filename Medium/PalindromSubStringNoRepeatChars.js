//Runtime: 102ms    Beats:    64.47%    Memory: 48.4MB    Beats: 40.32%



const lengthOfLongestSubstring = function(s) {
    let max = 0;
    let begin = 0;
    let map = {};

    for (let i = 0; i < s.length; i++) {
        if(map[s[i]] !== undefined && map[s[i]] >= begin) {
            begin = map[s[i]] + 1;
        }
        map[s[i]] = i;
        max = Math.max(max, i - begin + 1)
    }
    return max;
}