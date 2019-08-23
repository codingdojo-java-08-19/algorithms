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

//console.log(factorial(6.5));

function floodFill(canvas2D, startXY, newColor, oldColor = null) {
    //Only replace values equal to startXY value
    //only replace adjacent positions diagonal is not adjacent
    // Need to look up down left and right
    //store original color

    var startX = startXY[0];
    var startY = startXY[1];
    if (oldColor == null) {
        oldColor = canvas2D[startX][startY];
        console.log(oldColor);
    }
    var currentColor = canvas2D[startX][startY];
    if (currentColor != oldColor) {
        return;
    }

    canvas2D[startX][startY] = newColor;

    console.log(startX + 1);
    if (startX + 1 < canvas2D.length) {
        floodFill(canvas2D, [startX + 1, startY], newColor, oldColor);
    }
    if (startX - 1 >= 0) {
        floodFill(canvas2D, [startX - 1, startY], newColor, oldColor);
    }
    if (startY + 1 < canvas2D[startX].length) {
        floodFill(canvas2D, [startX, startY + 1], newColor, oldColor);
    }
    if (startY - 1 >= 0) {
        floodFill(canvas2D, [startX, startY - 1], newColor, oldColor);
    }

    return canvas2D;


}

var count = 0;


function rFib(num) {
    //n > 1 fn = fn-1 fn-2
    // F0 = 0
    // F1 = 1
    // F2 = 1
    // F3 = 2
    // Fnum
    count++;
    if (num == 1) {
        return 1;
    }
    else if (num <= 0) {
        return 0;
    }

    return rFib(num - 1) + rFib(num - 2);
}

function rFib2(num, cache = {}) {
    // Make it better

    count++
    if (num == 1) {
        return 1;
    }
    if (num <= 0) {
        return 0;
    }
    if (num in cache) {
        return cache[num];
    }
    cache[num] = rFib2(num - 1, cache) + rFib2(num - 2, cache);
    return cache[num];


}

// var canvas = [
//     [3, 2, 3, 4, 3],
//     [2, 3, 3, 4, 0],
//     [7, 3, 3, 5, 3],
//     [6, 5, 3, 4, 1],
//     [1, 2, 3, 3, 3],
// ];
// startXY = [2, 2];
// newColor = 9;

console.log(rFib2(30));
console.log(count);