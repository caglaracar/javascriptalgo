const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letterToNumber = {};

for (let i = 0; i < alphabet.length; i++) {
    letterToNumber[alphabet.charAt(i)] = i + 1;
}

const titleToNumber = function(columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        const letter = columnTitle.charAt(i);
        console.log(letter)
        const number = letterToNumber[letter];
        result = result * 26 + number;
    }
    return result;
};
console.log(titleToNumber("ZY"))


