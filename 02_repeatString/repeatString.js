const repeatString = function(baseString, count) {
    if (count<0){
        return "ERROR"
    }
    superString=""
    for (let i=0; i<count; i++){
        superString+=baseString;
    }
    return superString;
};

// Do not edit below this line
module.exports = repeatString;
