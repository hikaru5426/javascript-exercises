const repeatString = function(string, repeatedNumber) {

    if (repeatedNumber < 0){
        return "ERROR";
    }

    result = "";
    for (counter = 1; counter <= repeatedNumber; counter++){
        result += string;
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
