/*  PROBLEM 14
 You are given with an array. Your task is to print the left rotated array after k
opearations. Time:O(n) Extra Space: O(1)
*/


function leftRotateArray(arr, k) {
    let myArray=[];
    for (let i = 0; i < k; i++) {
       myArray.push(arr.shift());
    }
    arr = arr.concat(myArray);
    return arr;
 }
var n=parseInt(prompt("enter the value of n"));
arr= [1, 2, 3, 4, 5, 6, 7]
 let result = leftRotateArray(arr, 3);
 console.log(result);
