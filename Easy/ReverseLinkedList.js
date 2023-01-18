// Runtime: 68 ms    Beats: 80.98%    Memory: 44.1MB    Beats 45.50%
var reverseList = function(head) {
    let cur = head;
    let prev = null;
    let next;
    
    while(cur !== null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};