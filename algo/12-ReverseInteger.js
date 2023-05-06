/*
Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
 */

const reverse = (x) => {
    const reverseArray = [];
    const givenArraySplited = x.toString().split('');
    let temp = givenArraySplited.length - 1;
    for (let i = 0; i <= temp;) {
        if (temp === givenArraySplited.length - 1) {
            if (givenArraySplited[temp] === '0') {
                temp--;
                if(givenArraySplited.length===1){
                    reverseArray.push(0)
                    break;
                }
                continue;
            }
        }
        if (temp === 0 && givenArraySplited[temp] === '-') {
            reverseArray.unshift('-');
        } else {
            reverseArray.push(givenArraySplited[temp]);
        }
        temp--;
    }

    const reversedNumber = parseInt(reverseArray.join(''));

    if (reversedNumber < Math.pow(-2, 31) || reversedNumber > Math.pow(2, 31) - 1) {
        return 0;
    }

    return reversedNumber;
};




const givenArray = [533];
console.log(reverse(givenArray))


