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


//[1,2,3,4,4,4,5] [1,2,3,6,6,7]*
//[1,1*,2,2*,3,3*,4,5,6*,6*,7*]


function merge2point0(array, array2) {
  let focus = [];
  let multiSet = [];
  let small = [];
  let j = 0;
  if (array.length >= array2.length) {
    focus = array;
    small = array2;
  } else {
    focus = array2;
    small = array;
  }

  for (let i = 0; i < focus.length; i++){
    if (i > small.length) {
      multiSet.push(focus[i]);
    } else if (focus[i] < small[i]) {
      multiSet.push(focus[i]);
    }else if (focus[i] > small[i]) {
      multiSet.push(small[i]);
    } else if (focus[i] == small[i]) {
      multiSet.push(focus[i]);
      multiSet.push(small[i]);
    }
    j = i;
    while (Math.abs(focus[j + 1] - focus[j])<= Math.abs(focus[j]-small[j])) {
      multiSet.push(focus[j])
      console.log("focus here is focus", focus[j]);
      console.log("focus here is j", j);
      console.log("here is multiset", multiSet);
      console.log("here is i", i);

      j++
    }
    while (Math.abs(small[j + 1] - small[j])<= Math.abs(small[j] - focus[j])) {
      multiSet.push(small[j])
      console.log("small here is j", j);
      console.log("here is i", i);
      console.log("here is multiset", multiSet);

      j++
    }
  }
  return multiSet;
}
function merge(array, array2) {
  let multiSet = [];
  let i = 0;
  let j = 0; 

  let stop = 0;
  while (i < array.length && j < array2.length) {
    console.log("here is stop", stop);
    console.log("here is multiSet", multiSet);
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
    stop++
    if (stop == 20) {
      console.log("got infinite");
      break
    }
  }
  console.log("i before while", i);
  while (i < array.length) {
    multiSet.push(array[i]);
    i++
    stop++

    console.log("here", i)
    console.log("array value", array[i]);
    console.log("i while here is stop", stop);
    console.log("here is multiSet", multiSet);
  }
  while (j < array2.length) {
    multiSet.push(array[j++]);
    stop++
    console.log("array value", array[i]);
    console.log(" j while here is stop", stop);
    console.log("here is multiSet", multiSet);
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
  return merge2point0(result1, result2);
}

console.log("this is the result of merge",mergeSort([]));