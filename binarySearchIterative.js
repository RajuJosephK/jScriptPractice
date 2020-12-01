arr = [1, 2, 3, 4, 5, 6, 7, 8];
numToFind = 9;

function binarySearch(arr, numToFind) {
  let startIdx = 0;
  let endIdx = arr.length - 1;

  while (startIdx <= endIdx) {
    let mid = Math.floor((startIdx + endIdx) / 2);

    if (arr[mid] === numToFind) {
      return true;
    } else if (arr[mid] > numToFind) {
      endIdx = mid - 1;
    } else {
      startIdx = mid + 1;
    }
  }
  return false;
}

let result = binarySearch(arr, numToFind);

console.log(result);
