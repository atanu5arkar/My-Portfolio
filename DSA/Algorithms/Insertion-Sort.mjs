/* 
 * View the array in 2 parts. One part holds the sorted values, whereas the other part has the unsorted ones.
 * Typically, the value at index 0 is considered the initial value of the "sorted part."
 * Elements are picked one-by-one from the unsorted part and placed at the appropriate position in the sorted array.
*/

import fs from "fs";

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];

        for (let j = i - 1; j >= 0; j--) {
            if (temp < arr[j]) {
                arr[j + 1] = arr[j];
                arr[j] = temp;
            } else break;
        }
    }
}

let data = [4, 2, -3, 1, 0, 5, -2];

insertionSort(data);
console.log(data);

// Test for large array
data = fs.readFileSync("100k-data.json");
data = JSON.parse(data);

insertionSort(data);

fs.writeFile("sorted-data.json", JSON.stringify(data), (err) => {
    if (err) throw new Error("Write Operation Failed!");
    return console.log("Data sorted successfully.");
});