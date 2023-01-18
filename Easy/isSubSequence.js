// Runtime: 65ms    Beats: 80.7%    Memory: 41.9MB    Beats: 69.59%


var isSubsequence = function(s, t) {

    // Basically length counters
    let sPointer = 0;
	let tPointer = 0;

    // If length counter equals length of either array, discontinue.
    while(tPointer <= t.length-1 && sPointer <= s.length-1) {
        // if character in substring is in string
	    if(s[sPointer] === t[tPointer]) {
            // increase length counter of substring
		    sPointer++;
	    }
        // Otherwise increase length counter of string
	    tPointer++;
    }
    // if substring chars equal original substring length
    return sPointer === s.length;
}