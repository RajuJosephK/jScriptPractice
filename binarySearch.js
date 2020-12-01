arr = [1, 2, 3, 4, 5, 6, 7, 8];
numToFind = 0;
startIdx = 0;
endIdx = arr.length - 1;

function binarySearch(arr, numToFind, startIdx, endIdx) {
  mid = Math.floor((startIdx + endIdx) / 2);

  if (startIdx > endIdx) {
    return false;
  }

  if (arr[mid] === numToFind) {
    return true;
  }

  if (numToFind > arr[mid]) {
    startIdx = mid + 1;
    return binarySearch(arr, numToFind, startIdx, endIdx);
  } else {
    endIdx = mid - 1;
    return binarySearch(arr, numToFind, startIdx, endIdx);
  }
}

found = binarySearch(arr, numToFind, startIdx, endIdx);

console.log(found);
