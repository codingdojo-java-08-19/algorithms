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
