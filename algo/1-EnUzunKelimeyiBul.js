/*
Verilen stringteki En uzun kelimeyi bulun ve uzunluğunu yazdırın
 */

// Uzun Yol
// const findMaxLengthOfString = (str) => {
//     const splitedArray = str.split(' ')
//     let maxLength=splitedArray[0].length
//     let maxLengthStr=splitedArray[0];
//
//     for (let i = 1; i <splitedArray.length; i++) {
//         if(maxLength<splitedArray[i].length){
//             maxLength=splitedArray[i].length
//             maxLengthStr=splitedArray[i]
//         }
//     }
//     const result= `Found Max length: ${maxLength} and Max Length String : ${maxLengthStr}`
//     return result;
//
// }

// Kısa yol
const findMaxLengthOfString = (str) => {
    const found = str.split(' ').sort((a, b) => {
        return b.length - a.length
    })

    return `Found Max length: ${found[0].length} and Max Length String : ${found[0]}`

}


const s = "today we gonna talk about Important rules of chess"
console.log(findMaxLengthOfString(s))
