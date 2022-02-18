// 557. Reverse Words in a String III
// Easy
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.


solution 1:




/**
 * @param {string} s
 * @return {string}
 */
//  Runtime: 92 ms, faster than 71.15% of JavaScript online submissions for Reverse Words in a String III.
//  Memory Usage: 49 MB, less than 9.19% of JavaScript online submissions for Reverse Words in a String III.


 var reverseWords = function(s) {
    let arr = s.split(" ");
    let result = [];
    
    for(let i = 0 ; i<arr.length; i++){
        result.push(arr[i].split('').reverse().join(''));
    }
    
    return result.join(" ");
    }