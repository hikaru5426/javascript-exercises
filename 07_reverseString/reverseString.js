const reverseString = function(string) {
    let reversedString = "";
    for(character = string.length - 1; character >= 0; character --){
        reversedString += string[character];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
