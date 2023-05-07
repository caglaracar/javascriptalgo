/*x ve o sayıları eşitse true değilse false döndür*/

// Uzun Yol
const checkCount = (str) => {

    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            countX++;
        } else if (str[i].toLowerCase() === 'o') {
            countO++;
        }
    }
    return countX===countO
}

const checkCountQuickWay= (str)=>{
    let countX = 0;
    let countO = 0;
    str.toLowerCase().split('').map(letter=>letter==='x'?countX++ :letter==='o'?countO++:'')
    return countX===countO
}
const str = 'xxoo';
// console.log(checkCount(str))
console.log(checkCountQuickWay(str))

