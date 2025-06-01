const getTheTitles = function(arr) {
    var title = []
    arr.forEach(element => {
        title.push(element['title'])
    });
    return title
};

// Do not edit below this line
module.exports = getTheTitles;
