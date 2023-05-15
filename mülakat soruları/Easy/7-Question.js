/*
242. Valid Anagram
Easy
9K
286
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.


Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */


const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sObj = {};
    const tObj = {};

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if (sObj[sChar]) {
            sObj[sChar]++;
        } else {
            sObj[sChar] = 1;
        }

        if (tObj[tChar]) {
            tObj[tChar]++;
        } else {
            tObj[tChar] = 1;
        }
    }
    console.log(sObj["a"])

    for (let key in sObj) {
        if (sObj[key] !== tObj[key]) {
            return false;
        }
    }

    return true;
};

const s = "anagram"
const t = "nagaram"
console.log(isAnagram(s, t))










