const fibonacci = function(input) {
    if (typeof input !== "number"){
        input=Number(input);
    };
    let prev=1;
    let curr=1;
    if ( (input===1) || (input===2) ){return 1};
    if ( (input===0)) { return 0;};
    if ( (input<0)) { return "OOPS";};

    for(let i=3; i<=input; i++){
        let oldCurr=curr;
        curr=prev+curr;
        prev=oldCurr;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
