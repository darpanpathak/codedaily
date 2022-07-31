// 234. Palindrome Linked List
// Easy

// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mid = (head) => {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

var reverse = (head) => {

    let prev = null;
    let curr = head;

    while (curr != null) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

    if (!head.next) {
        return true;
    }
    const midNode = mid(head);
    let last = reverse(midNode);
    let curr = head;

    while (last != null) {
        if (curr.val !== last.val) {
            return false;
        }

        curr = curr.next;
        last = last.next;
    }

    return true;
};

function main() {
    const node3 = new ListNode(1, null);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(2, node2);
    const validHead = new ListNode(1, node1);

    const invalidNode1 = new ListNode(2, null);
    const invalidHead = new ListNode(1, invalidNode1);

    const validNode4 = new ListNode('A', null);
    const validNode3 = new ListNode('B', validNode4);
    const validNode2 = new ListNode('C', validNode3);
    const validNode1 = new ListNode('B', validNode2);
    const validHead1 = new ListNode('A', validNode1);

    console.log(isPalindrome(validHead));
    console.log(isPalindrome(invalidHead));
    console.log(isPalindrome(validHead1));
};

main();