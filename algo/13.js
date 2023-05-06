/*
bir string içindeki tüm harflerin benzersiz olup olmadığını kontrol etmek.
 */

function isUniqueChars(str) {
    const sortedStr = str.split("").sort().join('')
    console.log(sortedStr)
    for (let i = 1; i < sortedStr.length; i++) {
        if (sortedStr[i] === sortedStr[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isUniqueChars("abcde")); // true
console.log(isUniqueChars("abcdea")); // false