// function InterLeaveArray(array, array2) {
//   let i = 0;
//   let j = 0;
//   let newArray = [];
//   while (i < array.length && j < array2.length) {
//     newArray.push(array[i++]);
//     newArray.push(array2[j++]);
//   }
//   while (i < array.length) {
//     newArray.push(array[i++]);
//   }
//   while (j < array2.length) {
//     newArray.push(array2[j++]);
//   }
//   return newArray;
// }
// // console.log(
// //   "This is Interleave",
// //   InterLeaveArray([1, 2, 3, 5, 6, 7, 8], [4, 3, 2])
// // );

// function merge(array, array2) {
//   let mergedArray = [];
//   let i = 0;
//   let j = 0;
// //mergedArray.length == array2.length + array.length
//   while (i < array.length && j < array2.length) {
//     if (array[i] < array2[j]) {
//       mergedArray.push(array[i++]);
//     } else if (array[i]>array2[j]){
//       mergedArray.push(array2[j++])
//     } else if (array[i] == array2[j]) {
//       mergedArray.push(array[i++])
//       mergedArray.push(array2[j++])
      
//     }
//   }
//    while (i < array.length) {
//     mergedArray.push(array[i++]);
//   }
//   while (j < array2.length) {
//     mergedArray.push(array2[j++]);
//   }

//   return mergedArray;
// }
//[1,2,2,5,5,7,7,9] *[9,10,22,31]
//[9]
function intersectSorted(array, array2) {
  let intersection = [], 
    i = 0,
    j = 0,
    stop = 0;
  // if interator is at the end of array
  while (i < array2.length && j < array2.length) {
    if (array[i] > array2[j]) {
      console.log("first if triggerd", j);
      j++
    } else if (array2[j] > array[i]) {
      console.log("second if triggerd", i);
      i++
    } else if (array[i] == array2[j]) {
      console.log("third if triggerd", i, j);
      intersection.push(array[i++])
      j++
    }
    stop++
    if (stop == 25) {
      console.log("we got infinite")
      return intersection;
    }
  }
    //compare values at indices
    //if same push to intersection
    //incriment iterators (i and j)
  return intersection;
}

  
//first=[1,2,2,4,5,] second =[2,5,6,7]
//first = [2,5]
function intersectInplace(first, second){
  //keep of how many skipped
  let i = 0,
    j = 0,
    skipped = 0;

  while (i < first.length && j < second.length) {
    if (second[j] < first[i]  ) {
      j++;
    } else {
      if (second[j] == first[i]) {
        //swap
        first[i - skipped] = second[j++];
      } else {
        skipped++;
      }
      i++;
    } 
  }
  first.length -= skipped;
  console.log("here is first", first);
  console.log("here is skipped", skipped);
  
  return first;
}

                                                          //[]
console.log("here is the result of merge", intersectInplace([1, 2, 2, 3, 4, 5], [1, 2, 2, 2, 3, 3, 4, 6, 7, 9]));