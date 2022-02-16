// 977. Squares of a Sorted Array
// Easy

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?


// solution 1:
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let result = [];
    for (let num of nums){
        result.push(num*num);
    }
    return result.sort(function(a,b){return a-b})
};


// solution 2:
// Runtime: 100 ms, faster than 97.03% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 49.1 MB, less than 7.61% of JavaScript online submissions for Squares of a Sorted Array.

var sortedSquares = function(nums) {
    // use two pointers
    // create a new array
    const result = new Array(nums.length);
    let left = 0, 
        right = nums.length - 1;
    
	// don't want to rearrange the array, so iterating the array in descending order 
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            result[i] = nums[right] ** 2
            right--;
        } else {
            result[i] = nums[left] ** 2
            left++;
        }
    }
    
    return result;
};