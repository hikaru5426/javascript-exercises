const palindromes = function (string) {
    stringCleared = string
        .trim()
        .toLowerCase()
        .split("");
    const authorizedCharacters = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9"
    ];
    stringCleared = stringCleared.filter((character) => authorizedCharacters.includes(character));
    return (stringCleared.join("") === [...stringCleared].reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;
