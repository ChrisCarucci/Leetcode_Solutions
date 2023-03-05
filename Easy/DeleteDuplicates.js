const deleteDuplicates = function(head) {
    // declare variable current and initializes it to head.
    let current = head;
    // if head and current head next value is not null
    while(current !== null && current.next !== null){
        // if current head value is equal to next
        if(current.val === current.next.val){
            current.next = current.next.next; // store current.next.next value to current.next so it will remove current.next value in linkedlist
        }else{ // if current head value is not equal to next then move forward
            current = current.next;
        }
    }
    return head;
};