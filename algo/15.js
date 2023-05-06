
// QUESTİON
// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.


// const pivotIndex = (numbers) => {
//     let leftSide = 0;
//     let rightSide = 0;
//     let pivotIndexNumber = -3;
//
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < numbers.length; j++) {
//             if (i === j) {
//                 continue;
//             }
//             if (i < j) {
//                 rightSide += numbers[j]
//             }
//             if (i > j) {
//                 leftSide += numbers[j];
//             }
//         }
//         if (rightSide !== leftSide) {
//             rightSide = 0;
//             leftSide = 0;
//         } else {
//             pivotIndexNumber = i
//             break;
//         }
//     }
//     if (pivotIndexNumber > 0) {
//         return pivotIndexNumber
//     } else if (pivotIndexNumber === 0) {
//         return 0
//     } else {
//         return -1
//     }
// }
//
// const numbers = [1, 2, 3, 7, 2, 3, 1];
// console.log(pivotIndex(numbers))