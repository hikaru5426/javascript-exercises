const fibonacci = function(number) {
    let fibonacci = [1, 1];
    let numberParsed = Number(number);

    if (numberParsed < 0){
        return "OOPS";
    }
    if(numberParsed == 0){
        return 0;
    }

    for(let i = 2; i < numberParsed; i++){
        fibonacci.push(fibonacci[i-2]+fibonacci[i-1]);
    }

    return fibonacci[numberParsed-1];

};

// Do not edit below this line
module.exports = fibonacci;
