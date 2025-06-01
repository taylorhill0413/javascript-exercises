const palindromes = function (str) {
    var str1 = "";
    var str2 = "";
    str = str.toLowerCase()
    for (var i = 0; i < str.length; i++){
        if (/^([a-zA-Z0-9]+)$/.test(str[i])){
            str1 = str1 + str[i]
        }
    }
    var j=str1.length - 1;
    while (j >= 0){
        str2 = str2 + str1[j]
        j = j - 1
    }
    if (str2 == str1){
        return true
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
