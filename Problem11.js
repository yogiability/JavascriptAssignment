/* 
*****PROBLEM 11******
Given an array of N elements.find the number of occurences of each character and
print it in the decreasing order of occurences, if 2 or more number occurs the same
number of times, print the numbers in decreasing order.
*/


function sortByOccurences(arr){
    // create a new map
    let map = new Map();
    let count = 1;
    let len = arr.length;
    // set the element and count in map
    for (let i = 0; i < len; i++) {
        // if map have this element then count + 1
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        // else set the count as 1
        else {
            map.set(arr[i], count)
        }
    }
    // assign the map as 2D array
    let newArray = [...map];
    //sort the elements in decending order
    newArray.sort((a, b) => (b[0] - a[0]))
    //sort the occurence in decending order
    newArray.sort((a, b) => (b[1] - a[1]))
    let result = newArray.map(x => x[0])
    return result;
}

let arr = [3, 3, 4, 4, 7, 8]
console.log(sortByOccurences(arr));
