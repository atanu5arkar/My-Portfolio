/* 
 * Since radix sort does not use a compare function, the following implementation only works for positive numbers.
*/

import fs from "fs";

function getDigit(num, place) {
    return String(num).split("").reverse()[place];
}

function maxDigits(arr) {
    return arr.reduce((acc, num) => {
        const digits = String(num).length;
        acc = Math.max(acc, digits);
        return acc;
    }, 1);
}

function radixSort(arr) {
    const iterations = maxDigits(arr);

    for (let i = 0; i < iterations; i++) {
        const buckets = new Array(10).fill().map(() => []);

        for (const number of arr) {
            const digit = getDigit(number, i) ?? 0;
            buckets[digit].push(number);
        }
        arr = buckets.flat();
    }
    return arr;
}

let data = [14, 1232, 345, 1, 20, 35, 612];

let result = radixSort(data);
console.log(result);

// Test for large array
data = fs.readFileSync("100k-data.json");
data = JSON.parse(data);

result = radixSort(data);

fs.writeFile("sorted-data.json", JSON.stringify(result), (err) => {
    if (err) throw new Error("Write Operation Failed!");
    return console.log("Data sorted successfully.");
});