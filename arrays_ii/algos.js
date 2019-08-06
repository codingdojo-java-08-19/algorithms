function average(arr){
    var avg=0;
    for (var i=0;i<arr.length;i++){
        avg += arr[i];
    }
    return avg/arr.length;
}

function sum(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

function balancePoint(arr){
    var sum1=arr[0];
    var sum2 =0;
    for(var i=1; i<arr.length;i++){
        sum2+=arr[i];
    }
    /** loop -> sum1 = to arr[0] compare to sum2 = rest of array
     *  if sum1 is == to sum2 return i or index
     *  if sum1 is > sum2 return -1
     * or if end of arrray return -1
     */
    for(var i =1;i<arr.length;i++){
        if (sum1==sum2){
            return true;
        }
        sum2 -= arr[i];
        sum1 += arr[i];
        console.log("variables", sum1,sum2)
    }
    return false;
}

function balanceIndex(arr){
    var sum1=arr[0];
    var sum2 =0;
    for(var i=1; i<arr.length;i++){
        sum2+=arr[i];
    }
    for(var i=1;i<arr.length-1;i++){
        sum2 -= arr[i];
        if (sum1==sum2){
            return i;
        }
        sum1 += arr[i];
        console.log("variables", sum1,sum2)
    }
    return -1;
    
}

function binarySearch(arr, val){
    var end = arr.length;
    var start= 0;
    var count =0;
    //new array length each iteration -> end-start
    while (start<end){
        var midpt = Math.floor((end+start)/2);
        if (count++>100){
            return ('Fail!');
        }
        if (arr[midpt]==val){
            return true;
        }
        else if (arr[midpt]>val){
            end = midpt-1;
        }
        else if (arr[midpt]<val){
            start = midpt+1;
        }
    }
    return false;
}

console.log(binarySearch([1,2,3,4,5],1));
