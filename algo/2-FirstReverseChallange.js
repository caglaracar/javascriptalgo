/*Verilen String'i Ters Çevirme*/

// UZUN YOL
// const reverseString = (str) => {
//     const reverseArray=[];
//     for (let i = str.length-1; i >=0; i--) {
//         reverseArray.push(str[i])
//     }
//     return reverseArray.join('').toUpperCase()
// }

// KISA YOL
 const reverseString= (str)=>{
     return(str.split('').reverse().join('').toLowerCase())
 }

const str = "AlGoritHms";
console.log(reverseString(str))