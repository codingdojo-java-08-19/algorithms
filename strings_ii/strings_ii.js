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
        if (string[i] in punc) {
            arrFrag.push(reverseWordOrder(sentenceFrag.join("")).push(string[i]));
            sentenceFrag = [];
        }
        else {
            sentenceFrag.push(string[i]);
        }
    }
    var j = arrFrag.length - 1;
    for (var i = 0; i < Math.floor(arrFrag.length / 2); i++) {
        var swap = arrFrag[i];
        arrFrag[i] = arrFrag[j];
        arrFrag[j] = swap;
        j--;
    }
    return arrFrag.join("");
}

console.log(reverseWordOrderBonus("Life is not a drill, go for it!"));