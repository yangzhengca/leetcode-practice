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
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

// solution 1:

// Runtime: 88 ms, faster than 59.49% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 44.8 MB, less than 5.26% of JavaScript online submissions for Reverse Linked List.



/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (head == null || head.next == null){
        return head;
    }    

    let reversedHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return reversedHead;
    
};