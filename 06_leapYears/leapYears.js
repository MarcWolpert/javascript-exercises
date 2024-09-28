const leapYears = function(year) {
    const isDivisible4=year%4===0;
    const isDivisible400=year%400===0;
    const isDivisible100=year%100===0;

    if (!isDivisible4){ 
        return false;
    }
    if (isDivisible100 && !isDivisible400){
        return false;
    }
    return true;
};

// Do not edit below this line
module.exports = leapYears;
