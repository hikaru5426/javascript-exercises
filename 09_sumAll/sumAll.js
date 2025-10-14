const sumAll = function(a, b) {
    const aBigger = a > b ? true : false;
    let sum = 0;
    if(a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number" || !Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    }else if(aBigger){
        for (integer = b; integer <= a; integer++){
            sum += integer;
        }
    } else{
        for (integer = a; integer <= b; integer++){
            sum += integer;
        }
    }
    return a === b ? a  * 2 : sum;
};

// Do not edit below this line
module.exports = sumAll;
