// 206. Reverse Linked List
// Easy

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let prev = null;
    let curr = head;

    while (curr != null) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
};

function main() {
    const node5 = new ListNode(5, null);
    const node4 = new ListNode(4, node5);
    const node3 = new ListNode(3, node4);
    const node2 = new ListNode(2, node3);
    const head = new ListNode(1, node2);

    console.log(reverseList(null));
}

main();
