// Runtime: 91ms    Beats: 35.97%    Memory Usage: 43.7MB    Beats: 57.23%


var reverse = function(x) {
    x = x.toString()
    let limit = 2147483648
    negTest = x < 0 ? -1 : 1;
    
    
    let result = '';
    
    for (let i of x) {
        result = i + result;
        
    }
    result = parseInt(result)
    return result > limit ? 0 : result * negTest;
};