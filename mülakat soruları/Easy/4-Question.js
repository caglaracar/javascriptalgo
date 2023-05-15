/*
14. Longest Common Prefix
Easy
13.8K
3.9K
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 */

const longestCommonPrefix = (strs) => {
    let longestPreString = "";

    let shortestWord = strs[0]
    for (let i = 1; i < strs.length; i++) {
        if (shortestWord.length > strs[i].length) {
            shortestWord = strs[i]
        }
    }

    for (let i = 0; i <shortestWord.length ; i++) {
        for (let j = 0; j <strs.length; j++) {
            if(shortestWord[i]!==strs[j][i]){
                return longestPreString
            }
        }
        longestPreString+=shortestWord[i]
    }

    return longestPreString

}
const strs = ["flower", "flow", "flight"]

console.log(longestCommonPrefix(strs));