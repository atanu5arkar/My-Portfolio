// The arr argument must be a sorted array of integers

function binarySearch(arr, target) {
    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (target < arr[mid])
            end = mid - 1;
        else if (target > arr[mid])
            start = mid + 1;
        else return mid;
    }
    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 7));
console.log(binarySearch([2, 4, 6, 8, 10], 2));
console.log(binarySearch([2, 4, 6, 8, 10], 5));
