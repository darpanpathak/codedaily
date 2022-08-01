// 2. Add Two Numbers
// Medium

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  head1 = l1;
  head2 = l2;
  let prev = null;
  let resultHead = null;

  while (head1 != null || head2 != null) {
    const digit1 = head1?.val || 0;
    const digit2 = head2?.val || 0;

    const sum = digit1 + digit2 + carry;

    const newNode = new ListNode(sum % 10, null);
    if (prev === null) {
      prev = newNode;
      resultHead = prev;
    } else {
      prev.next = newNode;
      prev = prev.next;
    }
    carry = Math.floor(sum / 10);
    head1 = head1 === null ? head1 : head1.next;
    head2 = head2 === null ? head2 : head2.next;
  }

  if (carry > 0) {
    prev.next = new ListNode(carry, null);
    prev = prev.next;
  }

  return resultHead;
};

function main1() {
  // 342
  const l1Node2 = new ListNode(3, null);
  const l1Node1 = new ListNode(4, l1Node2);
  const l1 = new ListNode(2, l1Node1);

  //465
  const l2Node2 = new ListNode(4, null);
  const l2Node1 = new ListNode(6, l2Node2);
  const l2 = new ListNode(5, l2Node1);

  // 342 + 465 = 807
  const ans = addTwoNumbers(l1, l2);
  console.log(ans);
}

function main() {
  // 9999999
  const l1Node6 = new ListNode(9, null);
  const l1Node5 = new ListNode(9, l1Node6);
  const l1Node4 = new ListNode(9, l1Node5);
  const l1Node3 = new ListNode(9, l1Node4);
  const l1Node2 = new ListNode(9, l1Node3);
  const l1Node1 = new ListNode(9, l1Node2);
  const l1 = new ListNode(9, l1Node1);

  //9999
  const l2Node3 = new ListNode(9, null);
  const l2Node2 = new ListNode(9, l2Node3);
  const l2Node1 = new ListNode(9, l2Node2);
  const l2 = new ListNode(9, l2Node1);

  // 9999999 + 9999 = 10009998
  const ans = addTwoNumbers(l1, l2);
  console.log(ans);
}
main();
