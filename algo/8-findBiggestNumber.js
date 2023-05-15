/*Verilen bir dizideki en büyük sayıyı bulmak:*/

const findBiggestNumber= (num)=>{
    let max=num[0];
    for (let i = 1; i <num.length; i++) {
        if(num[i]>max){
            max=num[i]
        }
    }
    return max;

}
const array=[3,5,7,8,21,1,4,77,22,3]
console.log(findBiggestNumber(array))

/* Soru: Bir dizi içindeki en büyük ardışık pozitif sayıların toplamını bulun.*/

