/*
22. Generate Parentheses
Medium
17.8K
723
Companies

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.





Input: n = 3
Output: ["( )()( )"]


Input: n = 2
Output: ["( )( ),( () )"]



Input: n = 1
Output: ["()"]
 */


function generateParenthesis(n) {
    const res = [];

    function backtrack(s, open, close) {
        if (s.length === 2 * n) {
            res.push(s);
            return;
        }

        for (let i = 0; i < 2; i++) {
            if (i === 0 && open < n) {
                backtrack(s + "(", open + 1, close);
            } else if (i === 1 && close < open) {
                backtrack(s + ")", open, close + 1);
            }
        }
    }

    backtrack("", 0, 0);

    return res;
}

console.log(generateParenthesis(3))
