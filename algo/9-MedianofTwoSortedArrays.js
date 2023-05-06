/*
*** LEET CODE***
4. Median of Two Sorted Arrays
Hard

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

 Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */

// const arr1=[3];
// const arr2=[-2,-1];
//     const findMedianSortedArrays = function(nums1, nums2) {
//
//         const concatArray = nums1.concat(nums2).sort((a, b) => a - b);
//         let findNumber=0;
//         const concatArrayLength= concatArray.length;
//         if(concatArrayLength%2===0){
//             findNumber=(concatArray[concatArrayLength/2]+concatArray[(concatArrayLength/2)-1])/2;
//         }else{
//             findNumber=concatArray[Math.floor(concatArrayLength/2)]
//
//         }
//         return findNumber;
//
//     };
//
//
// console.log(findMedianSortedArrays(arr1,arr2))










