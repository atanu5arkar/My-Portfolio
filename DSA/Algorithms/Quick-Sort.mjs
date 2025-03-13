import fs from "fs";

const data = JSON.parse(fs.readFileSync('100k-data.json'));

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, start, end) {
    const pivot = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (arr[i] <= pivot) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}

function quickSort(arr, start, end) {
    if (start >= end) return;

    const pIndex = partition(arr, start, end);
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end);
}

quickSort(data, 0, data.length - 1);
fs.writeFileSync('dataset_sorted.json', JSON.stringify(data));
console.log('Dataset sorted successfully!');