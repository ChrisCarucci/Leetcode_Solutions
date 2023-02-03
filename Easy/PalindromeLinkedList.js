.. Runtime: 156ms    Beats: 87.55%    Memory Usage: 63.7MB    Beats: 82.21%


const isPalindrome = function(head) {
        let fast = head;
        let slow - head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        fast = head;
        slow = reverse(slow);

        while(slow) {
            if(fast.val !== slow.val) {
                return false;
            }
            slow = slow.next;
            fast = fast.next;
        }
        return true;
};

function reverse(root) {
    let prev = null;

    while(root) {
        let ref = root.next;
        root.next = prev;
        prev = root;
        root = ref;
    }
    return prev;
}