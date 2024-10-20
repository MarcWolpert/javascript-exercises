const getTheTitles = function(associativeArr) {
    arr=[]
    associativeArr.map((item)=>arr.push(item.title));
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
