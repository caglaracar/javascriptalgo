/*
5. Longest Palindromic Substring
Medium

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 */


// function longestPalindrome(str) {
//     let maxLength = 0;
//     let maxPalindrome = '';
//
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             let isPalindrome = true;
//             for (let k = i, l = j; k < l; k++, l--) {
//                 if (str[k] !== str[l]) {
//                     isPalindrome = false;
//                     break;
//                 }
//             }
//             if (isPalindrome && (j - i + 1) > maxLength) {
//                 maxLength = j - i + 1;
//                 maxPalindrome = str.slice(i, j + 1);
//             }
//         }
//     }
//
//     return maxPalindrome;
// }
//
// console.log(longestPalindrome("babad")); // "bab" veya "aba"
// console.log(longestPalindrome("cbbd")); // "bb"
// console.log(longestPalindrome("turkish")); // "s"


/*
Palindrome Number
 */

function isPalindrome(number) {
    const strNumber = number.toString();
    console.log("Original:", strNumber);

    let left = 0;
    let right = strNumber.length - 1;
    let isPalindromic = true;

    while (left < right) {
        if (strNumber[left] !== strNumber[right]) {
            isPalindromic = false;
            break;
        }
        left++;
        right--;
    }

    return isPalindromic;
}

console.log(isPalindrome(-1221)); // true
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(12345)); // false







