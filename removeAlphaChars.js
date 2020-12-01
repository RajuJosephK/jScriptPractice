// Remove alpha chars from an array

arr = ["v", "a", "d", "b", 3, "c", 4];

x = 0;
while (x < arr.length) {
  if (typeof arr[x] != "number") {
    arr.splice(x, 1);
  } else {
    x = x + 1;
  }
}
console.log(arr);
