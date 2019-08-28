function wordArray(string) {
    var arr = [];
    var substr = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            substr = substr.join("");
            arr.push(substr);
            substr = [];
            continue;
        }
        substr.push(string[i]);
    }
    substr = substr.join("");
    arr.push(substr);
    return arr;
}

function reverseWordOrder(string) {

    var arr = wordArray(string);
    var j = arr.length - 1;
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
        var swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
        j--;
    }

    return arr.join(" ");

}

function reverseWordOrderBonus(string) {
    var sentenceFrag = [];
    var punc = [",", "!", ".", "?", ";"];
    var arrFrag = [];
    for (var i = 0; i < string.length; i++) {
        //console.log("In for loop");
        if (punc.includes(string[i])) {
            console.log("In conditional!");
            arrFrag.push((reverseWordOrder(sentenceFrag.join(""))));
            arrFrag.push(string[i]);



            sentenceFrag = [];
        }
        else {
            sentenceFrag.push(string[i]);
        }
    }
    var j = arrFrag.length - 1;
    var i = 0;
    while (i < j) {
        if (punc.includes(arrFrag[i]) && punc.includes(arrFrag[j])) {
            i++;
            j--;
        }
        else if (punc.includes(arrFrag[i])) {
            i++;
        }
        else if (punc.includes(arrFrag[j])) {
            j--;
        }
        else {
            var swap = arrFrag[i];
            arrFrag[i] = arrFrag[j];
            arrFrag[j] = swap;
            j--;
            i++;
        }
    }
    var capArr = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] == string[i].toUpperCase()) {
            capArr.push(true);
        }
        else {
            capArr.push(false);
        }
    }

    return arrFrag.join("");
}

console.log(reverseWordOrderBonus("Life is not a drill, go for it!"));