/*
Verilen String'i Ters Çevirme
 */

// const reverseString= (str)=>{
//     const reverseArray=[];
//     for (let i = str.length-1; i >=0 ; i--) {
//         reverseArray.push(str[i])
//     }
//     return reverseArray.join('')
// }

const reverseString= (str)=>{
    return arr=str.split('').reverse().join('')
}

const str="Algorithms";
console.log(reverseString(str))