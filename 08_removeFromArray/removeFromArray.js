const removeFromArray = function(arr, ...pos) {
    var a = [];
    arr.forEach(element => {
        if (!pos.includes(element)){
            a.push(element)
        }
    });
    return a
};

// Do not edit below this line
module.exports = removeFromArray;
