/*
Bir stringi Terse çeviriniz
 */



function reverseArray(array) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex < rightIndex) {
        const temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;

        leftIndex++;
        rightIndex--;
    }

    return array;
}

console.log(reverseArray([1,2,3,4,5]))