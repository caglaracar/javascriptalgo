/* Soru 1
Faktöriyel bulma sorusu 
verilen bir sayının faktöriyelini bulunuz*/

// const calculateFactorial = (number) => {
//     const numbersArray = [];
//     // const initValue = 1;
//     for (let i = 0; i < number; i++) {
//         numbersArray[i] = number - i;
//     }
//     const reducer= (accumulator, currentValue) => accumulator * currentValue;
//     const foundFactorilNumber = numbersArray.reduce(reducer);
//     return foundFactorilNumber;
// }

// const number = 8;
// console.log(calculateFactorial(number))


/*
 Soru 2
Verilen bir dizinin elemanlarını toplayan bir fonksiyon yazın.
Örnek girdi: [1, 2, 3, 4, 5]
Örnek çıktı: 15
*/

// const sumFunction= (incomingArray)=>{
//     let result=0;
//     for (let i = 0; i < incomingArray.length; i++) {
//         // result =result+ incomingArray[i];
//         result+=incomingArray[i]
//     }
//     return result;
// }

// arrayToSend=[1,2,3,4,5,6,7,8,9,10]
// console.log("Toplam sonucu :",sumFunction(arrayToSend));


/*
soru 3:
Verilen bir dizideki tek sayıların toplamını hesaplayan bir fonksiyon yazın.(odd:Tek ) even: Çift
Örnek girdi: [1, 2, 3, 4, 5]
Örnek çıktı: 3
*/


//1.yol
// const sumOdd= (numbers)=>{

//     let result=0;
//     for (let i = 0; i < numbers.length; i++) {
//         if(numbers[i]%2 !==0){
//             result+=numbers[i]
//         }
//     }
//     return result;
// }


// 2.Yol

// const sumOdd=(numbers)=>{
//     let filtered=numbers.filter((num)=>(num % 2 !==0));
//     let total= filtered.reduce( (acc,curr)=>acc*curr)
//     return total;
// }
//
//
//
//
// numbers=[1,2,3,4,5,6,7,8,9,10,11,1]
// console.log("Tek sayıların toplamı 2. yöntem ile",sumOdd(numbers))


/*
Soru 4:
Verilen bir dizi içindeki çift sayıların toplamını hesaplayan(even)
bir fonksiyon yazın.
Örneğin, [1, 2, 3, 4, 5, 6] dizisi için fonksiyonun sonucu : 12 olmalıdır
 */


// 3.yöntem


// const evenFunc = (numbers) => {
//     // işlemler
//     let evenSum = 0;
//     for (let number of numbers) {
//         if (number % 2 === 0)
//             evenSum += number
//     }
//     return evenSum;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(evenFunc(numbers))


/*
 Soru5:
Verilen bir dizideki tek sayıların ortalamasını hesaplayan bir fonksiyon yazın.
Örnek girdi: [1, 2, 3, 4, 5]
Örnek çıktı: 3
*/

/*
 const oddSumFunc= (numbers)=>{
     const filtered=numbers.filter( number=>number%2 !==0)
     let sum= filtered.reduce( (acc,curr)=>acc+curr,0)
     // isteyenler reduce fonksiyonunu araştırabilir : MDN
     console.log(sum)
     let result= sum / numbers.length
     return result.toFixed()
 }
 const numbers=[1,2,3,4,5,6,7];
 console.log(oddSumFunc(numbers))
 */

/*
Soru 6 :
Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.
Örnek girdi: [10, 5, 8, 20]
Örnek çıktı: 20
*/

// const findTheBiggestNumber = (numbers) => {
//     let resultNumber = numbers[0];
//     for (let i = 1; i <numbers.length; i++) {
//         if(resultNumber<numbers[i]){
//             resultNumber=numbers[i]
//         }
//     }
//     return resultNumber;
// }
//
// const numbers = [124, 23, 4, 5, 612321, 6321, 65454123, 32321];
// console.log("en büyük sayı:",findTheBiggestNumber(numbers))



//  Soru7:
//  Verilen bir dizi (array) içinde tekrar eden sayıları bulan bir JavaScript fonksiyonu yazın.
//
// Örneğin, [1, 2, 3, 4, 5, 6, 2, 4] dizisi verildiğinde, fonksiyonunuz 2 ve 4'ü tekrar eden sayılar olarak tanımlamalı
// ve bu sayıları içeren yeni bir dizi döndürmelidir.

//
//     const numbers=[1,2,3,4,5,6,1,3,7,7]
//     const repeatedArray= (numbers)=>{
//     const returnArray=[];
//
//     for (let i = 0; i < numbers.length; i++) {
//
//         for (let j = 0; j <numbers.length ; j++) {
//             i!==j && numbers[i]===numbers[j]
//                 ?
//                 returnArray.includes(numbers[i]) ? 0:
//                 returnArray.push(numbers[i])
//                 :
//                 0
//
//         }
//     }
//     return returnArray;
// }
// console.log("Tekrar eden  arrayim : ",repeatedArray(numbers))



const data=[1,2,3,4,5,632,12,4,2,31,3,66,2,1,31,23,1,3,12,99,31,2312,54,123,58,45,21,55,58,3,77,32,32,32,321,32,312,57,312,312]
const formatMaxTemp = () => {
    const temps = []
    let firstTemp = data[0]

    for (let i = 1; i < data.length+1; i++) {
        // if ( firstTemp < data[i] ){
        //     firstTemp =data[i]
        // }
        // if ( i % 8 === 0){
        //     temps.push(firstTemp)
        //     firstTemp=data[i]
        // }
    }
    console.log(temps);
}

formatMaxTemp()
























