/*
verilen sayı kadar  asal sayının toplamını bulun ve bu toplamın tam bölenlerinin sayısını hesaplayın
 */

const isPrime= (num)=>{
    if(num<=1){
        return false
    }
    if(num>=2){
        for (let i = 2; i <num; i++) {
            if(num%i===0){
                return  false
            }
        }
        return true;
    }
}
const sumNPrimeNumbers= (n)=>{
    const primeNumbers=[]
    let count=0;
    let num=2;
    while(count!==n){
        if(isPrime(num)){
            primeNumbers.push(num)
            count++;
        }
        num++;

    }
    let sum=0;
    primeNumbers.map((number)=>{return sum+=number })
    return sum;
}

const primeSumDivisor= (num)=>{
    let count=0;
    const foundSumPrime=sumNPrimeNumbers(num)
    for (let i = 1; i <=foundSumPrime; i++) {
        if(foundSumPrime%i===0){
            count++;
        }
    }
    return count
}


console.log(primeSumDivisor(5))

