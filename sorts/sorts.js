// For review, create a function that uses BubbleSort to sort an unsorted array in-place.
// simalar max min ava

// function bubbleSort(arr) {
    
//   }

function arrayBubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
          if (arr[j - 1] > arr[j]) {
            var temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
          }
        }
      }
    return arr;
}

//

function optBubbleSort(array) {
    let isSorted = false;
    let counter = 0;
    let counter1 = 0;
    while(isSorted == false){
        //if checking neighbouring values?
        isSorted = true;
        // console.log("w", counter++)
        for (let i = 0; i < array.length; i++){
            // console.log("f", counter1++)
            if (array[i - 1] >  array[i]) {
                isSorted = false;
                const temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;
            }  
        } 
    }
    return array;
}

function selectionSort(array) {
    //let sortedIndex = 0;
    let sorted = false;
    let minPosition = 0;
    let temp = 0;
    for (var j = 0; j < array.length; j++){
      minPosition = j;
      console.log('4-1', j)
        for (var i = j; i < array.length; i++){
          console.log('4-2', i)
            if (array[minPosition] > array[i]){
                minPosition = i;
            }
        }
        temp = array[j];
      console.log('This is j', j)
        array[j] = array [minPosition];
        array[minPosition] = temp; 
    }
    return array;
}
console.log('here is the sorted array', selectionSort([5,3,4,0,1,2]))

console.log('here is the sorted array', optBubbleSort([5,3,4,]))