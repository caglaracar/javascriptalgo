/*
11. Container With Most Water
Medium

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
 */

//Solution 1

// const maxArea = function (s) {
//     let temp = 0;
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < s.length; j++) {
//             if (i !== j) {
//                 if (s[i] < s[j]) {
//                     if(temp<Math.abs(s[i]*(i-j))){
//                         Math.abs(temp = s[i] * (i - j))
//                     }
//                 } else {
//                     if(temp<Math.abs(s[j]*(i-j))) {
//                         Math.abs(temp = s[j] * (i - j))
//                     }
//                 }
//             }
//         }
//     }
//    return temp;
// }

const maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    let minHeight=0;
    let area=0;

    while (left < right) {
        if (height[left] < height[right]) {
            minHeight = height[left];
            area = minHeight * (right - left);
            maxArea = (maxArea > area) ? maxArea : area;
            left++;
        } else {
            minHeight = height[right];
            area = minHeight * (right - left);
            maxArea = (maxArea > area) ? maxArea : area;
            right--;
        }
    }
    return maxArea;
}



    const givenArray = [18,114,1,4,7,9]

console.log(maxArea(givenArray))




















