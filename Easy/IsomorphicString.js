
// Less Memory, slightly less fast than Arr and Charcode. 
// Runtime: 67ms    Beats: 97.25%     Memory: 42MB     Beats: 95.62%

const isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let sHashMap = {};
    let tHashMap = {};
    let curr = 0;

    while (curr <= s.length) {
        if(sHashMap[s[curr]] != tHashMap[t[curr]]) {
            return false
        }
        sHashMap[s[curr]] = curr+1;
        tHashMap[t[curr]] = curr+1;
        curr++;
    }
    return true
};


// Less Memory Efficient with Array/CharCode Solution:
// Runtime: 63ms   Beats: 98.91%    Memory: 42.6 MB     Beats: 74.37%

const isIsomorphic = function(s, t) {
    if (s.length != t.length) {
		return false;
	}

	let sArr = new Array(128).fill(0);
	let tArr = new Array(128).fill(0);

for(let i = 0; i < s.length; i++) {
	let sId = s.charCodeAt(i);
	let tId = t.charCodeAt(i);

	if(sArr[sId] != tArr[tId]) {
		return false;
	}
	sArr[sId] = i + 1;
	tArr[tId] = i + 1;
}

return true;
};



// Leetcodes Best Solution :(
// Runtime: 61ms    Beats: 99.29%     Memory: 41.7 MB     Beats: 99.24%

const isIsomorphic = (s, t) => {
    let map = new Map(), set = new Set()
    for(let i = 0; i < s.length; i++){
        let sChar = s[i], tChar = t[i]
        if(map.has(sChar)){
            if(map.get(sChar) !== tChar)return false
        }else{
            if(set.has(tChar))return false
            map.set(sChar, tChar)
            set.add(tChar)
        }
    }
    return true
};