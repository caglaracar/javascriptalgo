
/*
Question: Verilen bir dizideki sayıların toplamının belirli bir hedef sayıya eşit olduğu tüm ikili kombinasyonları bulun.
Örnek:
Dizi: [1, 3, 5, 7, 9]
Hedef: 10

Sonuç:
[[1, 9], [3, 7]]
 */
// const combinationFindTarget = (numbers, target) => {
//     const foundArray = [];
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < numbers.length; j++) {
//             if (i === j) {
//                 continue;
//             }
//             if (j > i && numbers[i] + numbers[j] === target) {
//                 foundArray.push([numbers[i], numbers[j]]);
//             }
//         }
//     }
//     return foundArray;
// }
//
// const numbers = [1, 3, 5, 7, 9];
// const target = 10;
// console.log(combinationFindTarget(numbers, target));