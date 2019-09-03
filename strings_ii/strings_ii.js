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
function letterArray(string) {
    var arr = [];
    for (var i = 0; i < string.length; i++) {
        arr.push(string[i]);
    }
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

//console.log(reverseWordOrderBonus("Life is not a drill, go for it!"));

function censor(str, badWords) {
    var strArr = wordArray(str);
    var censoredWord = [];//when you don't declare with var, it makes the variable global!
    for (var i = 0; i < strArr.length; i++) {
        var currWord = strArr[i];
        for (var j = 0; j < badWords.length; j++) {
            var badWord = badWords[j];
            if (currWord.includes(badWord)) {
                var index = currWord.indexOf(badWord);//TO DO->edge case of multiple instances of the bad word
                for (var k = 0; k < currWord.length; k++) {
                    if (k >= index && k < index + badWord.length) {
                        censoredWord.push("x");
                    }
                    else {
                        censoredWord.push(currWord[k]);
                    }
                    console.log(censoredWord.join(""));
                }
                strArr[i] = censoredWord.join("");
                censoredWord = [];
            }
        }
    }
    return strArr.join(" ");
}

//console.log(censor("Hello Helllo goodbye.", ["Hell", "good"]));

function rotateString(str, num) {
    if (num % str.length == 0) {
        return str;
    }
    num = num % str.length;
    var remainder = str.length - num;
    var newStrArr = [];
    for (var i = remainder; i < str.length; i++) {
        newStrArr.push(str[i]);
    }
    for (var i = 0; i < remainder; i++) {
        newStrArr.push(str[i]);
    }
    return newStrArr.join("");


}
console.log(rotateString("Hello Helllo goodbye.", 5));

function badChars(str, strOfBadChars) {
    var newStrArr = [];
    for (var i = 0; i < str.length; i++) {
        if (strOfBadChars.includes(str[i])) {
            continue;
        }
        newStrArr.push(str[i]);
    }
    return newStrArr.join("");
}
console.log(badChars("Hello Helllo goodbye.", "l"));