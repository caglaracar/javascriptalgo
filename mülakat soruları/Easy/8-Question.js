/*
344. Reverse String
Easy
7.3K
1.1K
Companies
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.



Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 */
const reverseString = function (s) {
    let left=0;
    let right=s.length-1;

    while (left<right){
        const temp=s[left];
        s[left]=s[right];
        s[right]=temp;

        left++;
        right--
    }
   return s

};


const s = ["h", "e", "l", "l", "o"]
console.log(reverseString(s))











