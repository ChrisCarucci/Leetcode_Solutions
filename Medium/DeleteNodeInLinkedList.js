// Runtime: 62ms    Beats: 96.66%    Memory Usage: 43.8MB    Beats: 91.36%


var deleteNode = function(node) {
        let next = node.next.next;
        node.val = node.next.val;
        node.next = next;
};