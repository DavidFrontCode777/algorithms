// The most optimal solution
// Time complexity: O(N)
// Space complexity: O(1)
function reverse(head) {
    let prev = null
    let cur = head

    while(cur) {
        let nxt=cur.next
        cur.next=prev
        prev=cur
        cur=nxt
    }
    return prev
    }

    var isPalindrome = function (head) {
    let slow = head
    let fast = head
    while(fast&&fast.next) {
        slow=slow.next
        fast=fast.next.next
    }
    let rev = reverse(slow)
    while(rev) {
        if (head.value!==rev.value) {
        return false
        }
        head=head.next
        rev=rev.next
    }
    return true
    }

// Time complexity: O(N)
// Space complexity: O(N)
var isPalindrome = function(head) {
    const listVals = [];
    while (head) {
        listVals.push(head.val);
        head = head.next;
    }
    
    let left = 0, right = listVals.length - 1;
    while (left < right && listVals[left] === listVals[right]) {
        left++;
        right--;
    }
    return left >= right;
};