const fibonacci = function(num) {
    if (num < 0)
        return "OOPS"
    num = Number(num)
    var arr = new Array(1,1);
    var j = 0;
    if (num == 0)
        return 0
    if (num < 2)
        return arr[num-1]
    for (var i=2; i < num; i++){
        j = arr[i-1]+arr[i-2]
        arr.push(j)
    }
    return arr[num-1]
};

// Do not edit below this line
module.exports = fibonacci;
