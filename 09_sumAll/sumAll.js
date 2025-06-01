const sumAll = function(start, end) {
    if (start > end){
        var temp = start;
        start = end
        end = temp
    }
    if (!Number.isInteger(start) || !Number.isInteger(end) || start <= 0 || end <= 0){
        return "ERROR"
    }
    let result = 0;
    for (var i = start; i <= end; i++){
        result += i
    }
    
    return result
};

// Do not edit below this line
module.exports = sumAll;
