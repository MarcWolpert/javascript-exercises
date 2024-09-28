const removeFromArray = function() {
    let arr=arguments[0];
    for (let i=1; i<arguments.length; i++){
        //search for items in array and removes all
        //occurrences in that array
        arr=arr.filter( (arg) => arg!==arguments[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
