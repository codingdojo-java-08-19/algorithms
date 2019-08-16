// // For review, create a function that uses BubbleSort to sort an unsorted array in-place.
// // simalar max min ava

// // function bubbleSort(arr) {

// //   }

// function arrayBubbleSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 1; j < arr.length; j++) {
//       if (arr[j - 1] > arr[j]) {
//         var temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// //

// function optBubbleSort(array) {
//   let isSorted = false;
//   let counter = 0;
//   let counter1 = 0;
//   while (isSorted == false) {
//     //if checking neighbouring values?
//     isSorted = true;
//     // console.log("w", counter++)
//     for (let i = 0; i < array.length; i++) {
//       // console.log("f", counter1++)
//       if (array[i - 1] > array[i]) {
//         isSorted = false;
//         const temp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = temp;
//       }
//     }
//   }
//   return array;
// }

// function selectionSort(array) {
//   //let sortedIndex = 0;
//   let sorted = false;
//   let minPosition = 0;
//   let temp = 0;
//   for (var j = 0; j < array.length; j++) {
//     minPosition = j;
//     console.log("4-1", j);
//     for (var i = j; i < array.length; i++) {
//       console.log("4-2", i);
//       if (array[minPosition] > array[i]) {
//         minPosition = i;
//       }
//     }
//     temp = array[j];
//     console.log("This is j", j);
//     array[j] = array[minPosition];
//     array[minPosition] = temp;
//   }
//   return array;
// }
// console.log("here is the sorted array", selectionSort([5, 3, 4, 0, 1, 2]));

// console.log("here is the sorted array", optBubbleSort([5, 3, 4]));

function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    let value = array[i];
    //Parent for loop keeps track of sorted index
    //Grab the first index thats not sorted and
    for (var j = i - 1; j > -1 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = value;
  }
  return list;
  //compare to each index in the sorted section
  // Based off comparison place value at sorted index
}



const list = [5, 7, 3, 4, 10, 20, 100, -50];
console.log(insertionSort(list));


//[1,2,3,4,5] [1,2,3,6,6,7]*
//[1,1*,2,2*,3,3*,4,5,6*,6*,7*]

function merge(array, array2) {
  let multiSet = [];
  let i = 0;
  let j = 0; 
  while (i<array.length && j<array2.length) {
    if (array[i] == array2[j]) {
      multiSet.push(array[i]);
      multiSet.push(array2[j]);
      i++;
      j++;
    }
    if (array[i] < array2[j]) {
      multiSet.push(array[i]);
      i++      
    } else{
      multiSet.push(array2[j]);
      j++;
      
    }
    //whoever is longer becomes focus
   //compare them 
   //push min to front 
  }
  while (i < array.length) {
    multiSet.push(array[i++]);
  }
  while (j < array2.length) {
    multiSet.push(array[j++]);
  }
  return multiSet
}

function mergeSort(array) {

  //base case
  if (array.length <= 1) {
    return array
  }
  let first = array.slice(0, Math.floor(array.length / 2));
  let second = array.slice(Math.floor(array.length / 2),array.length);
  let result1 = mergeSort(first);
  let result2 = mergeSort(second);
  console.log("this is result1", result1);
  console.log("this is result2", result2);
  return merge(result1, result2);
}

console.log("this is the result of merge",merge([1,2,4,5],[1,2,3,4]));