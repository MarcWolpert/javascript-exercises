const palindromes = function (input) {
    let arr=[...input];
    console.log(arr);
    let arr_filtered=arr.filter((char)=>{
        return /[a-zA-Z0-9]/.test(char);
    })
    console.log(arr_filtered);
    const forward_nopunc=arr_filtered.toString().replaceAll(',',"").toLowerCase();
    const reverse_nopunc=[...forward_nopunc].reverse().toString().replaceAll(',',"").toLowerCase();
    console.log(`f:${forward_nopunc} \nb:${reverse_nopunc}`);
    return forward_nopunc===reverse_nopunc;
};

// Do not edit below this line
module.exports = palindromes;
