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

function isPalindromic(str) {

    let left=0;
    let right=str.length-1;
    let isPalindromicStr=true
    while(left<right) {
        if(!(str[left]===str[right])){
            isPalindromicStr=false;
            break;
        }
        left++;
        right--;
    }
    return isPalindromicStr;
}

isPalindromic("babad")?console.log("Palindrome"):console.log("Not Palindrome")







