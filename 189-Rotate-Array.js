// 189. Rotate Array
// Medium

// Given an array, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
 

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?


// solution 1:
// exceed time limits

var rotate = function(nums, k) {
    if (!k){
        return nums;
    }
    nums.unshift(nums.pop());
    k --;
    return rotate(nums, k)
};

// solution 2:
// exceed time limits
var rotate = function(nums, k) {
    k = k % nums.length;
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};


// solution 3:
// Runtime: 168 ms, faster than 30.52% of JavaScript online submissions for Rotate Array.
// Memory Usage: 52.9 MB, less than 14.50% of JavaScript online submissions for Rotate Array.
 var rotate = function(nums, k) {
    k %= nums.length;
     
    let reverse = function(a, b){
     while(a < b){
         let temp = nums[a]
         nums[a] = nums[b]
         nums[b] = temp
         a ++
         b --
     }
    }
      reverse(0, nums.length-1); 
      reverse(0, k-1) 
      reverse(k, nums.length-1)
     
 };