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

function minSortedArr(arr){
    //find min val in a sorted that has bennn rotated x times
    var start = 0;
    var end = arr.length-1;
    var midpt = Math.floor(arr.length/2);
    var count = 0;
    if(arr[start] < arr[end] && arr[start] < arr[start+1]){
        return arr[start];
    }
    //loop
    while (end-start>1){
        // console.log("start: ", start);
        // console.log("end: ", end);
        // console.log("mdpt: ", midpt);
        if(arr[start]>arr[midpt]){
            if(arr[midpt]<arr[midpt-1]){
                return arr[midpt];
            }
            end = midpt -1;
            midpt = Math.floor((start + end)/2);
        }
        else{
            start = midpt;
            midpt = Math.floor((start + end)/2);
        }
        // if(count > 100){
        //     console.log("Broke out threshhold");
        //     return;
        // }
    }
    return arr[arr.length-1];
}
// test cases below:
// console.log(minSortedArr(["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"]));
// console.log(minSortedArr(["Celeste","Elon","Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna"]));
// console.log(minSortedArr(["Anna","Celeste","Elon","Gigli","Jay is cool","Mavis","Phoebe","Thurber"]));
// console.log(minSortedArr(["Thurber","Anna","Celeste","Elon","Gigli","Jay is cool","Mavis","Phoebe"]));
// console.log(minSortedArr(["Elon","Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste"]));

function flatten(arr){
    //Loop through the array, then find the nested elements?
    newArr=[];
    for (var i=0; i<arr.length; i++){
        if (Array.isArray(arr[i])){
            for (var j=0; j<arr[i].length;j++){
                newArr.push(arr[i][j]);
            }
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(flatten([1,[2,3],4,[]]));

function inPlaceFlatten(arr){
    //Loop through the array, then find the nested elements?
    for (var i=0; i<arr.length; i++){
        var element=arr[i];
        if (Array.isArray(element)){
            if (element.length){
                arr[i]=element.pop();
                while (element.length>0){
                    arr.push(element.pop());
                }
            }
            else {
                for (var j=i; j<arr.length-1;j++){
                    arr[j]=arr[j+1];
                }
                arr.pop();
            }
            //arr[i]=a;
            //first assign last element of innerarray in place of array, then push the rest of the elements onto the end of the array
        }
    }
    return arr;
}

console.log(inPlaceFlatten([1,[2,3],4,[]]));