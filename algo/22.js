
/*
41. First Missing Positive
Hard

Companies
Given an unsorted integer array nums, return the smallest missing positive integer.
You must implement an algorithm that runs in O(n) time and uses constant extra space.
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
 */

// const firstMissingPositive = (nums) => {
//     const n = nums.length;
//
//     for (let i = 0; i < n; i++) {
//         if (nums[i] <= 0 || nums[i] > n) {
//             nums[i] = 0;
//         }
//     }
//     console.log(nums)
//
//     for (let i = 0; i < n; i++) {
//         const num = Math.abs(nums[i]);
//         if (num > 0 && num <= n) {
//             nums[num - 1] = -Math.abs(nums[num - 1]);
//         }
//     }
//
//     for (let i = 0; i < n; i++) {
//         if (nums[i] > 0) {
//             return i + 1;
//         }
//     }
//
//
//     return n + 1;
// };
//
// const array = [0,1,2,4];
// console.log(firstMissingPositive(array));