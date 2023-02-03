// Runtime: 63ms    Beats: 85.88%    Memory Usage: 41.8MB    Beats: 98.51%

const removeNthFromEnd = function(head, n) {
    let lead = head, curr = head;
    while (n--) {
        lead = lead.next;
    }
    while (lead && lead.next) {
        curr = curr.next;
        lead = lead.next;
    }
    if (!lead) {
        head = head.next;
    } else {
        curr.next = curr.next ? curr.next.next : null;
    }
    return head;
};