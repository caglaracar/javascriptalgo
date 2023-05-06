/*
10. Regular Expression Matching

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
 */

const isMatch = function(s, p) {
    const match = (i, j) => {
        if (j === p.length) return i === s.length;
        const firstMatch = i < s.length && (s[i] === p[j] || p[j] === '.');
        if (j + 1 < p.length && p[j + 1] === '*') {
            return match(i, j + 2) || (firstMatch && match(i + 1, j));
        }
        return firstMatch && match(i + 1, j + 1);
    };
    return match(0, 0);
};

const s = "aa";
const p = ".*";

console.log(isMatch(s, p)); // true
