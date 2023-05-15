/*
20. Valid Parentheses
Easy
19.8K
1.2K
Companies
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

const isValid = function (s) {

    const characterArray = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        if (c === '(' || c === '[' || c === '{') {
            characterArray.push(c);
        } else {
            const last = characterArray.pop();

            if ((c === ')' && last !== '(') || (c === ']' && last !== '[') || (c === '}' && last !== '{')) {
                return false;
            }
        }
    }
    return characterArray.length === 0;
};

console.log(isValid("{([])}"))



















