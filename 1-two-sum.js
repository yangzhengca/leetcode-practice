// 1. Two Sum
// Easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


// solution 1:

// Runtime: 164 ms, faster than 31.60% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.7 MB, less than 28.92% of JavaScript online submissions for Two Sum.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i ++){
        let index = nums.indexOf(target - nums[i], i+1)
        if(index !== -1){
            return [index, i];
        }
    }
};


// solution 2:

// Runtime: 87 ms, faster than 79.69% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.9 MB, less than 19.83% of JavaScript online submissions for Two Sum.

var twoSum = function(nums, target) {
    let prevValues = {};
    for (let i = 0; i < nums.length; i ++){
        let currentNumber = nums[i];
        let neededValue = target - nums[i];    
        let index = prevValues[neededValue];
        if (index !== null) {
            return [index, i];
        } else {
            prevValues[currentNumber] = i;
        }
    }
};




// let arr = ['a', 'b', 'c','c']
// console.log(arr.indexOf('c', 3))