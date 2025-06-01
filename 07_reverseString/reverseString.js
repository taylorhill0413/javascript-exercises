const reverseString = function(str) {
    var i = str.length-1;
    var result = ""
    while (i >= 0){
        result += str[i]
        i = i -1
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
