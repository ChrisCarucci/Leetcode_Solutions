// Runtime: 67ms    Beats: 91.13%    Memory: 44.1MB    Beats: 57.56%

const mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;

    let cur = new ListNode();
    const dummy = cur;

    while(l1 && l2) {
	    if(l1.val < l2.val) {
		    cur.next = l1;
		    l1 = l1.next;
	    } else {
		    cur.next = l2;
		    l2 = l2.next;
	    }
        if (cur.next) {
            cur = cur.next;
        }
	    if(l1) {
		    cur.next = l1;
	    }
	    if(l2) {
		    cur.next = l2;
	    }
    }
    return dummy.next;
};



// Recursive Solution

const mergeTwoLists = function(list1, list2) {
    if (list1 == null) return list2;
    if (list2 == null) return list1;
 if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};