/*
I      :       1,
V      :       5,
X      :       10,
L      :       50,
C      :       100,
D      :       500,
M      :       1000
 */
const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}
const romanToInt = (str) => {
    let sum = 0;
    for (const strKey in str) {
        console.log(str[strKey])
        sum+=obj[str[strKey]]
    }
    return sum
}
const str = "MCMXCIV";
console.log(romanToInt(str))