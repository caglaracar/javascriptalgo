
// Question

// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
//
// const isIsomorphic = (s, t) => {
//     let sChar=''
//     let tChar=''
//     if (s.length !== t.length) {
//         return false;
//     }
//
//     for (let i = 0; i < s.length; i++) {
//         sChar = s[i];
//         tChar = t[i];
//
//         console.log(s.indexOf(sChar))
//         console.log(t.indexOf(tChar))
//         if(s.indexOf(sChar)!==t.indexOf(tChar)) {
//             return false;
//         }
//     }
//     return true;
// }
//
// const s = "foo";
// const t = "bar";
//
// console.log(isIsomorphic(s, t))
