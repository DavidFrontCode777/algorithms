// Time complexity: O(max(n, m))
// Space complexity: O(max(n, m))

// where n - is the length of the first linked list l1
// where m - is the length of the second linked list l2

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let cur = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        
        // Calculate new digit
        let val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        val = val % 10;
        cur.next = new ListNode(val);
        
        // Update pointers
        cur = cur.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return dummy.next;
};