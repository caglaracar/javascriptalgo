// const checkAB = (str) => {
//     const splitedStr = str.toLowerCase().split('')
//     console.log(splitedStr)
//     let counter = 0;
//
//     for (let i = 0; i < splitedStr.length; i++) {
//         if (splitedStr[i] === 'a' && splitedStr[i + 4] === 'b') {
//             counter++;
//         }
//     }
//     return counter
// }
//
// const str = 'axxxbbaddcbabbbbbbbbbbbbbbbaaabb';
// console.log(checkAB(str))



// Question 2
 /*
 x ve o sayıları eşitse true değilse false döndür
*/

const obj= {
    1:'ablkdsaşlmcac',
    2:'abıopeqwc',
    3:'abdsadsac',
    4:'abdsadc',
    5:'adsac',
}

const checkCount= (str)=>{
    const myObj={...obj,6:'dsadsa dsa dadsadsa  dsa dsad sad sad a dsa dsa dsadasdsadasdsa  dasdsa'}
    const sstr=[...str]

    sstr.forEach( (c)=>{
        console.log(c)
    })

    const splitedStr=[...str]
    console.log(splitedStr)
    console.log(myObj)
    // console.log(str)
    //
    //
    //  const splitedStr=[...str]
    // console.log(splitedStr[3])
    // let countX=0;
    // let countO=0;
    // for (let i = 0; i <splitedStr.length; i++) {
    //     if(splitedStr[i]==='x'){
    //         countX++;
    //     }else if(splitedStr[i]==='o'){
    //         countO++;
    //     }
    // }
    //  return countX===countO
}

const str = 'xxxoxxodsado';
const str2 = 'xxodsadasoxo';
console.log(checkCount(str))
// console.log(checkCount(str2))
