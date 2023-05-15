/*
İlk n asal sayının toplamını bulun ve bu toplamın tam bölenlerinin sayısını hesaplayın
 */


const isPrime= (num)=>{
    if(num<=1) return false;
    if(num>=2){
        for (let i = 2; i <num; i++) {
            if(num%i===0){
                return false
            }
        }
    }
    return true;
}

const firstNPrimeNumbers=(num)=>{
    const primeNumbers=[];
    let count=0;
    for (let i = 2; count <num; i++) {
        if(isPrime(i)){
            count++;
            primeNumbers.push(i)
        }
    }

    let sum=primeNumbers.reduce((acc,val)=>acc+val,0)
    return sum;

}
const primeSumDivisorCount=(num)=>{
    const sum=firstNPrimeNumbers(num)
    let counter=0;
    for (let i = 1; i <= sum; i++) {
        if(sum%i===0){
            counter++;
        }
    }
    return counter
}

console.log(primeSumDivisorCount(3))