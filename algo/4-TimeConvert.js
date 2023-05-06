const timeConvert= (number)=>{
    const hour=Math.floor(number/60);
    const minute=number%60;
     return `${hour} saat ve  ${minute} dakikadır`
}
const number=1928
console.log(timeConvert(number))