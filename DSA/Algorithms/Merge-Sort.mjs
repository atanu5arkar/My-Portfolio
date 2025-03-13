import fs from "fs";

const data = JSON.parse(fs.readFileSync('100k-data.json'));

function merge(left, right, main) {
    let i = 0, j = 0, k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j])
            main[k++] = left[i++];
        else
            main[k++] = right[j++];
    }
    while (i < left.length) main[k++] = left[i++];
    while (j < right.length) main[k++] = right[j++];
}

function mergeSort(mainArr) {
    const size = mainArr.length;

    if (size < 2) return;

    const mid = Math.floor(size / 2);
    const left = mainArr.slice(0, mid);
    const right = mainArr.slice(mid);

    mergeSort(left);
    mergeSort(right);
    merge(left, right, mainArr);
}

mergeSort(data);
fs.writeFileSync('dataset_sorted.json', JSON.stringify(data));
console.log('Dataset sorted successfully!');