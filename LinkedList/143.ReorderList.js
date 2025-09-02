var reorderList = function(head) {
  let slow = head
  let fast = head.next

  while (fast&&fast.next) {
      slow = slow.next
      fast = fast.next.next
  }

  let second = reverse(slow.next)
  slow.next = null
  let first = head
  

  while (second) {
      let tmp1 = first.next
      let tmp2 = second.next
      first.next = second
      second.next = tmp1
      first = tmp1
      second = tmp2
  }
};

var reverse = function(head) {
  let prev = null
  let cur = head

  while(cur) {
      let nxt = cur.next
      cur.next = prev
      prev = cur
      cur = nxt
  }

  return prev
}