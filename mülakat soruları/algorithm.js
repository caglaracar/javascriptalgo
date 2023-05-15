/*
2,3,5,7,11,13 are the first 6 prime numbers where 13 is the 6th prime number. Write a function that returns the Nth prime number for given input.
Examples
Input : 4  => Output : 7
Input : 6 => Output : 13
 */
const isPrime= (num)=>{
    if(num<=1) return false;
    if(num>=2){
        for (let i = 2; i <num ; i++) {
            if(num%i===0){
                return  false;
            }
        }
    }
    return  true;
}
const firstNIsPrimeNumbers= (num)=>{
    const primeNumbers=[];
    let count=0;
    for (let i = 2; count <num; i++) {
        if(isPrime(i)){
            count++;
            primeNumbers.push(i)
        }
    }
    return primeNumbers[primeNumbers.length-1];
}


console.log(firstNIsPrimeNumbers(5))

