/*
Write a function that validates all opened parentheses are closed in a string. (Balanced String)
Examples
abcde(xxyy)(xxyy) => true
abc(xx(yyy)ass)     => true
abc)(xx(yyy)ass     => false


 */




const validateParentheses= (str)=>{
    const characterArray=[];
    for (let i = 0; i <str.length ; i++) {
        const char=str[i];
        if(char==='('){
            characterArray.push(char);
        }
        if(char===')'){
           const last= characterArray.pop();
            if(last!=="("){
                return  false;
            }
        }
    }
    return characterArray.length===0;
}
const str="abc)(xx(yyy)ass"
console.log(validateParentheses(str))