let arr = [5, 1, 7, 4, 3, 6, 2, 8, 500, 99, 300];
function bubbleSort(arr) {
  arr.forEach((el, i) => {
    let a1 = arr[i];
    let a2 = arr[i + 1];

    if (arr[i] > arr[i + 1]) {
      arr[i] = a2;
      arr[i + 1] = a1;
      return bubbleSort(arr); // -- use this for recursive method
      //  i = 0; // Use this for iterative method
    }
  });
}
bubbleSort(arr);
console.log(arr);
