const upperCaseFirstLetter = (str) => {
    const upperCaseArray=[];
    const splitedArray = str.split(' ')
    for (let i = 0; i < splitedArray.length; i++) {

        const firstLetter=splitedArray[i].charAt(0).toUpperCase()
        const restOfTheWord=splitedArray[i].slice(1,splitedArray.length)
        upperCaseArray.push(firstLetter.concat(restOfTheWord));

    }
   return upperCaseArray.join(' ')
}
const str = 'selam kanka naber iyi misin bende iyiyim'
console.log(upperCaseFirstLetter(str))