/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

const isPalindromeStr = (str) => {
    let left = 0;
    let right = str.length - 1;
    let isPalindrome = true;
    while (left < right) {
        if (str[left] !== str[right]) {
            isPalindrome = false;
        }
        left++;
        right--;
    }
    return isPalindrome;
}
const lengthOfLongestSubstring = function (s) {
    let longestSbstringTemp = "";

    let longestSbstring = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (i === j) {
                longestSbstringTemp = s[i]
                continue
            }
            longestSbstringTemp += s[j]
            if (isPalindromeStr(longestSbstring)) {
                if(longestSbstring<longestSbstringTemp){
                    longestSbstring = longestSbstringTemp;
                }
            }else{
                if(longestSbstring.length===0){
                    break;
                }
            }
            longestSbstringTemp="";


        }
    }
    return longestSbstring
}
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(isPalindromeStr("a"))

