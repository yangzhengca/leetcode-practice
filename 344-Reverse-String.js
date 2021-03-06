// 344. Reverse String
// Easy

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.
 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.


// Solution 1:
// Runtime: 88 ms, faster than 97.53% of JavaScript online submissions for Reverse String.
// Memory Usage: 49.7 MB, less than 11.07% of JavaScript online submissions for Reverse String.


var reverseString = function(s) {
    let left = 0, right = s.length-1, temp;
    while(left<right){
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left ++;
        right --;        
    }
    return s;
};

// solution 2:

// Runtime: 119 ms, faster than 62.00% of JavaScript online submissions for Reverse String.
// Memory Usage: 51.5 MB, less than 5.14% of JavaScript online submissions for Reverse String.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s, left = 0, right = s.length - 1) {
    if (left === right || left > right){
        return s;
    } else {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
    }
    reverseString(s, left + 1, right -1)    
};