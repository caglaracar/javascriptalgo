/*
bir string içindeki tüm harflerin benzersiz olup olmadığını kontrol etmek.
 */
function isUniqueChars(str) {
    const charArray=[];
    let isUnique=true;

    for (let i = 0; i <str.length; i++) {
        const char=str[i];
        if(!(charArray.includes(char))) {
            charArray.push(char)
        }else{
            isUnique =false;
            break;
        }
    }
    return isUnique

}



console.log(isUniqueChars("abcde")); // true
console.log(isUniqueChars("abacde")); // false