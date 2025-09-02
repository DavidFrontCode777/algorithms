var mergeKLists = function(lists) {
    if (lists.length === 0) return null;

    while (lists.length>1) {
        let res = [];
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i]
            let l2 = i + 1 < lists.length ? lists[i + 1] : null;
            res.push(mergeTwoLists(l1,l2));
        }   
        lists = res
    }
    

    return lists[0]
};

var mergeTwoLists = function(list1,list2) {
    let dummy = new ListNode();
    let tail = dummy

    while(list1 && list2) {
        if (list1.val<=list2.val) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }

    tail.next = list1 || list2

    return dummy.next
};