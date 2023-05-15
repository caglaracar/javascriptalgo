/*
Write a function that returns the first non-repeating character of a string.
Examples
Input : “aaaaaabbbsasdweqwe” => Output : “d”
Input : “aaxaaaabbbsasdweqe” =>  Output : “x”
 */

const obj={}

const fillObj= (str)=>{
    for (let i = 0; i <str.length; i++) {
        const char=str[i]
        if(obj[char]){
            obj[char]++
        }else{
            obj[char]=1;
        }
    }
    for (const strKey in obj) {
        if(obj[strKey]===1){
            return strKey
        }
    }
}

console.log(fillObj("aaxaaaabbbsasdweqe"))
