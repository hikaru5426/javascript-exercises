const removeFromArray = function(arr, ...elementToRemove) {
    return arr.filter((element) => !elementToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
