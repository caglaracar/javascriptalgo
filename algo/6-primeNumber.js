/*
Tabii, size ilginç ve karışık bir asal sayı sorusu önerebilirim. İşte soru:
İlk 10 asal sayının toplamını bulun ve bu toplamın tam bölenlerinin sayısını hesaplayın
 */

const isPrime = (num) => {
    if (num <= 1) return false;
    if (num >= 2) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false
        }
        return true;
    }
}

const firstTenprimeNumbers = (n) => {
    const primeNumbers = []
    let num = 2;
    let count = 0;
    while (count !== n) {
        if (isPrime(num)) {
            primeNumbers.push(num)
            count++;
        }
        num++;
    }
    let sum = 0;
    primeNumbers.filter((item) => {sum += item})
    return sum
}

const primeSumDivisorCount= (num)=>{
    let primeSum=firstTenprimeNumbers(num)
    let counter=0;
    for (let i = 1; i <=primeSum; i++) {
        if(primeSum%i===0){
            counter++;
        }
    }
    return counter
}

console.log(primeSumDivisorCount(10))

