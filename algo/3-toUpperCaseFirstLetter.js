/*
Dizideki Elementlerin ilk karakter katarlarını büyük harfe çevir
 */
// Uzun yol
// const upperCaseFirstLetter = (str) => {
//     const upperCaseArray=[];
//     const splitedArray=str.split(' ')
//     for (let i = 0; i <splitedArray.length; i++) {
//         const firstLetter=splitedArray[i].charAt(0).toUpperCase()
//         const restOfTheWord=splitedArray[i].slice(1)
//         upperCaseArray.push(firstLetter.concat(restOfTheWord))
//     }
//     return upperCaseArray.join(' ')
// }
// Kısa Yol
const upperCaseFirstLetter = (str) => {
    const splitedArray=str.split(' ')
    const formatArray=splitedArray.map((word)=>{return `${word.charAt(0).toUpperCase()}${word.slice(1)}`})
    return formatArray.join(' ')
}



const str = 'Kuvvete dayanmayan adalet aciz, adalete dayanmayan kuvvet zalimdir'
console.log(upperCaseFirstLetter(str))