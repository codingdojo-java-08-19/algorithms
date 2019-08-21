// print array

function printArr(arr, count = 0) {
    if (count >= arr.length) {
        return;
    }
    console.log(arr[count]);
    count++;
    printArr(arr, count);

}

//printArr([1, 2, 3]);

//recursive sigma

function sigma(num) {
    num = Math.floor(num);
    if (num < 0) {
        return 0;
    }
    else if (num == 0) {
        return num;
    }
    return sigma(num - 1) + num;
}
function factorial(num) {
    if (num < 1) {
        return 1;
    }
    return factorial(num - 1) * Math.floor(num);
}

console.log(factorial(6.5));


