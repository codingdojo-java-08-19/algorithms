function InterLeaveArray(array, array2) {
  let i = 0;
  let j = 0;
  let newArray = [];
  while (i < array.length && j < array2.length) {
    newArray.push(array[i++]);
    newArray.push(array2[j++]);
  }
  while (i < array.length) {
    newArray.push(array[i++]);
  }
  while (j < array2.length) {
    newArray.push(array2[j++]);
  }
  return newArray;
}
console.log(
  "This is Interleave",
  InterLeaveArray([1, 2, 3, 5, 6, 7, 8], [4, 3, 2])
);
