/*
Verilen Sayı kaç saat kaç dakikadır
 */
const timeConvert= (number)=>{
    const hour=Math.floor(number/60);
    const minute=number%60;
    return `${hour} Saat ${minute} Dakikadır`;

}
const number=1881
console.log(timeConvert(number))