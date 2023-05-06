/*
12. Integer to Roman
Medium

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000


Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.

Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */


const intToRoman = (num) => {
    /*
    num kaç basamaklı onu bul

     */
    numberOfdigit=numberOfDigits(num)
    console.log("numberOFdigit",numberOfdigit)
    const I = 1
    const V = 5
    const X = 10
    const L = 50
    const C = 100
    const D = 500
    const M = 1000


}
function numberOfDigits(number) {
    let count = 0;
    number = number < 0 ? -number : number;
    while (number > 0) {
        number = (number - (number % 10)) / 10;
        count++;
    }
    if (count === 0) {
        count = 1;
    }
    return count;
}

console.log(numberOfDigits(12345));
console.log(intToRoman(677))
