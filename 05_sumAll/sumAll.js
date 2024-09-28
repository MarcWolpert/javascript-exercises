const sumAll = function(lowerBound,upperBound) {
    if (lowerBound>=upperBound){
        let temp=upperBound;
        upperBound=lowerBound;
        lowerBound=temp;
    }
    //Guaranteeing both non-negative
    if (lowerBound<0 || upperBound<0){
        return "ERROR";
    }
    //Guaranteeing Number
    if ( (typeof lowerBound)!=='number' || (typeof upperBound)!=='number'){
        return "ERROR";
    }
    //Guaranteeing Integer
    if (!Number.isInteger(lowerBound) || !(Number.isInteger(upperBound))){
        return "ERROR";
    }
    let sum=0;
    for (let i=lowerBound; i<=upperBound; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
