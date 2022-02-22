// 92. Reverse Linked List II
// Medium
// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n


Solution 1:

// Runtime: 83 ms, faster than 55.74% of JavaScript online submissions for Reverse Linked List II.
// Memory Usage: 41.8 MB, less than 42.10% of JavaScript online submissions for Reverse Linked List II.



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if(head == null){
        return head;
    }
    
    // move pointers to the sublist which needs to reverse     
    let cur = head, prev = null;
    while(left > 1){
        prev = cur;
        cur = cur.next;
        left --;
        right --;
    }
    
    let con = prev, tail = cur, third = null;
    
    while(right > 0){
        third = cur.next;
        cur.next = prev;
        prev = cur;
        cur = third;
        right --;
    }
    
    if (con != null){
        con.next = prev;
    } else {
        head = prev;
    }
    
    tail.next = cur
    return head;
    
    
    
};