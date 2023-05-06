

/*
Question:
    Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
    Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 */


// const longestPalindrome = (s) => {
//     const charactersCount = {};
//     for (let i = 0; i < s.length; i++) {
//         const sChar = s[i];
//         if (charactersCount[sChar]) {
//             charactersCount[sChar] += 1;
//         } else {
//             charactersCount[sChar] = 1;
//         }
//     }
//
//     let palindromeLength = 0;
//     let hasOddCount = false;
//     for (const count of Object.values(charactersCount)) {
//         if (count % 2 === 0) {
//             palindromeLength += count;
//         } else {
//             palindromeLength += count - 1;
//             hasOddCount = true;
//         }
//     }
//
//     if (hasOddCount) {
//         palindromeLength += 1;
//     }
//
//     return palindromeLength;
// };
//
//
//
// const s = "xdeeee";
// console.log(longestPalindrome(s));
