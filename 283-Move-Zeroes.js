// 283. Move Zeroes
// Easy

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?


// Solution 1:

// Runtime: 102 ms, faster than 80.95% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 46.5 MB, less than 26.46% of JavaScript online submissions for Move Zeroes.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let slow = 0; fast = 0;
    while (fast <= nums.length-1){
        if(nums[fast] !== 0){
            nums[slow] = nums[fast];
            slow ++;
            fast ++;
        } else {
            fast ++;
        }
        
    }
    while(slow <= nums.length-1){
        nums[slow] = 0;
        slow ++;
    }
};