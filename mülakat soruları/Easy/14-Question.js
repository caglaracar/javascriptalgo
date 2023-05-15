/*
isPalindorme
 */

const isPalindorme=(str)=>{
    let left=0;
    let right=str.length-1;
    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        right--;
        left++;
    }
    return  true
}
const str="aabbaa";
console.log(isPalindorme(str))

